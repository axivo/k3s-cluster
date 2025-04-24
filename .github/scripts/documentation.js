/**
 * Chart Documentation Utilities
 * 
 * This module provides functions for automating Helm chart documentation updates,
 * including installing the helm-docs tool and generating updated documentation.
 * It handles the process of generating and committing documentation changes to
 * pull requests, ensuring consistency across chart documentation.
 * 
 * @module documentation
 * @author AXIVO
 * @license BSD-3-Clause
 */

const os = require('os');
const api = require('./github-api');
const config = require('./config');
const utils = require('./utils');

/**
 * Installs the helm-docs package for generating Helm chart documentation
 * 
 * This function downloads and installs the helm-docs package from the official
 * GitHub repository. It uses wget to download the specific version .deb package
 * and then installs it using the system package manager (apt-get).
 * 
 * The function uses sudo commands for both downloading and installation to ensure
 * proper permissions, and handles timeouts and retries for reliable downloading
 * in CI environments. After installation, the helm-docs command becomes available
 * for use in subsequent workflow steps.
 * 
 * @param {Object} params - Function parameters
 * @param {Object} params.core - GitHub Actions Core API for logging and output
 * @param {Object} params.exec - GitHub Actions exec helpers for running commands
 * @param {string} [params.version] - Version of helm-docs to install (without v prefix)
 * @returns {Promise<void>}
 */
async function installHelmDocs({
  core,
  exec,
  version
}) {
  try {
    const tmpDir = os.tmpdir();
    const packageFile = `helm-docs_${version}_Linux_x86_64.deb`;
    const packageBaseUrl = 'https://github.com/norwoodj/helm-docs/releases/download';
    const packageUrl = [packageBaseUrl, `v${version}`, packageFile].join('/');
    const packagePath = [tmpDir, packageFile].join('/');
    core.info(`Installing helm-docs v${version}...`);
    const runSudo = async (args) => (await exec.getExecOutput('sudo', args)).stdout.trim();
    await runSudo(['wget', '-qP', tmpDir, '-t', '10', '-T', '60', packageUrl]);
    await runSudo(['apt-get', '-y', 'install', packagePath]);
    core.info('Successfully installed helm-docs');
  } catch (error) {
    utils.handleError(error, core, 'install helm-docs');
  }
}

/**
 * Updates documentation in a pull request by generating docs and committing changes
 * 
 * This function runs the helm-docs tool to automatically update chart documentation
 * based on the Chart.yaml files and templates. It executes the following steps:
 * 
 * 1. Fetches and switches to the PR branch to ensure all changes are made there
 * 2. Gets updated files from the PR and extracts unique directories from them
 * 3. Runs helm-docs either on specific directories affected by the PR or all directories
 * 4. Stages all changes to detect which documentation files were modified
 * 5. Creates a signed commit with these changes to the pull request branch
 * 
 * The function uses the GitHub GraphQL API to create the commit, ensuring it
 * appears as verified in the GitHub interface. It only creates a commit if
 * there are actual documentation changes detected.
 * 
 * @param {Object} options - Function parameters
 * @param {Object} options.github - GitHub API client for making API calls
 * @param {Object} options.context - GitHub Actions context containing repository information
 * @param {Object} options.core - GitHub Actions Core API for logging and output
 * @param {Object} options.exec - GitHub Actions exec helpers for running commands
 * @returns {Promise<void>}
 */
async function updateDocumentation({
  github,
  context,
  core,
  exec
}) {
  try {
    const runGit = async (args) => (await exec.getExecOutput('git', args)).stdout.trim();
    const headRef = process.env.GITHUB_HEAD_REF;
    core.info(`Getting the latest changes for '${headRef}' branch...`);
    await runGit(['fetch', 'origin', headRef]);
    await runGit(['switch', headRef]);
    core.info('Generating documentation with helm-docs...');
    const updatedFiles = await api.getUpdatedFiles({ github, context, core });
    const dirs = updatedFiles
      .map(file => {
        const parts = file.split('/');
        parts.pop();
        return parts.join('/');
      })
      .filter((dir, index, self) => self.indexOf(dir) === index); // Unique directories
    if (!dirs.length) {
      core.info('No specific directories found, running helm-docs on all directories');
      await exec.exec('helm-docs', ['-l', config('workflow').docs.logLevel]);
    } else {
      const dirsList = dirs.join(',');
      await exec.exec('helm-docs', ['-g', dirsList, '-l', config('workflow').docs.logLevel]);
    }
    await runGit(['add', '.']);
    const files = (await runGit(['diff', '--staged', '--name-only']))
      .split('\n')
      .filter(Boolean);
    if (!files.length) {
      core.info('No file changes detected, documentation is up to date');
      return;
    }
    const { additions, deletions } = await utils.getGitStagedChanges(runGit);
    if (additions.length + deletions.length > 0) {
      const currentHead = await runGit(['rev-parse', 'HEAD']);
      await api.createSignedCommit({
        github,
        context,
        core,
        branchName: headRef,
        expectedHeadOid: currentHead,
        additions,
        deletions,
        commitMessage: 'chore(github-action): update documentation'
      });
      const word = files.length === 1 ? 'file' : 'files'
      core.info(`Successfully updated ${files.length} documentation ${word}`);
    } else {
      core.info('No documentation changes to commit');
    }
  } catch (error) {
    utils.handleError(error, core, 'update documentation');
  }
}

/**
 * Exports the module's functions
 */
module.exports = {
  installHelmDocs,
  updateDocumentation
};
