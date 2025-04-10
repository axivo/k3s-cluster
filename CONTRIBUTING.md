# Contributing

First off, thank you for considering contributing to the project, we appreciate your time and effort! This document outlines the ways you can contribute and the processes we follow.

## Code of Conduct

By participating in this project, you agree to abide by our [Community Code of Conduct](CODE_OF_CONDUCT.md). We expect all contributors to foster an open, welcoming, and respectful environment.

## How Can I Contribute?

There are several ways you can contribute to the project:

### Asking Questions

If you have questions about using the cluster, configuring roles, or general inquiries about the project, please check the [Wiki](https://axivo.com/k3s-cluster) first. If your question isn't answered there, use [GitHub Discussions](https://github.com/axivo/k3s-cluster/discussions). This is the best place for community support and Q&A.

### Reporting Bugs

If you encounter a bug, please follow these steps:

1. **Search Existing Issues:** Before creating a new issue, please search the [existing bug reports](https://github.com/axivo/k3s-cluster/issues?q=is%3Aissue+label%3Abug) to see if the issue has already been reported.
2. **Create a New Issue:** If the bug hasn't been reported, please open a new issue using the [Bug Report template](https://github.com/axivo/k3s-cluster/issues/new?assignees=&amp;labels=bug%2Ctriage&amp;projects=&amp;template=bug_report.yml). Provide as much detail as possible, including:
    * A clear description of the bug and expected behavior.
    * Your Kernel version (`uname -a`).
    * Your Kubernetes version (`kubectl version`).
    * Relevant logs (if applicable).
    * Any other context that might help diagnose the issue.

### Suggesting Enhancements

If you have an idea for a new feature or an improvement to an existing one:

1. **Search Existing Issues:** Check the [existing feature requests](https://github.com/axivo/k3s-cluster/issues?q=is%3Aissue+label%3Aenhancement) to see if your idea has already been suggested.
2. **Create a New Issue:** If your idea is new, please open an issue using the [Feature Request template](https://github.com/axivo/k3s-cluster/issues/new?assignees=&amp;labels=enhancement%2Ctriage&amp;projects=&amp;template=feature_request.yml). Describe:
    * The problem your feature solves.
    * Your proposed solution.
    * Any alternative solutions you've considered.

### Adding New Roles

A primary way to contribute is by adding new Ansible roles for managing cluster components. If you have a role you'd like to include, please follow these guidelines:

1. **Directory Structure:** Create a new directory for your role under `roles/` (e.g., `roles/my-new-role/`). Follow the standard Ansible role directory structure.
2. **Required Files:** Inside this directory, include at least:
    * `defaults/main.yaml`: Default configuration values for the role.
    * `tasks/main.yaml`: The main tasks file for the role.
    * `README.md.gotmpl`: A template for the role's README. Use this to describe the role, its purpose, and configuration options (variables). See the **Update Documentation** section below for how this template is used.
    * Ensure the content and structure of this template follow the standards expected by the [`helm-docs`](https://github.com/norwoodj/helm-docs) tool, for proper README generation (even though it's Ansible, this tool is used for consistency).
    * `Chart.yaml`: A basic `Chart.yaml` file is needed for the documentation generation process (even if it's not a Helm chart). Include `name`, `description`, `version`, and `home` fields.
3. **Templates:** If the role uses templates, place them in a `templates/` subdirectory.
4. **Submission:** Follow the general **Development Workflow** outlined below to submit your new role.

## Development Workflow

If you'd like to contribute code or documentation changes, please follow this workflow:

1. **Fork the Repository:** Create your own fork of the `axivo/k3s-cluster` repository.
2. **Create a Branch:** Create a new branch in your fork for your changes (e.g., `git checkout -b feature/my-new-feature` or `git checkout -b fix/issue-123`). Base your branch on the `main` branch.
3. **Make Changes:** Implement your code or documentation changes.
4. **Follow Guidelines:**
    * Adhere to the project's coding style, aim for clarity and consistency with existing code.
    * Perform a self-review of your changes.
    * **Commit Messages:** Write commit messages following the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification. This helps automate releases and makes the commit history easier to read. The allowed types are: `build`, `ci`, `chore`, `docs`, `feat`, `fix`, `perf`, `refactor`, `revert`, `style`, `test`. Your Pull Request title should also follow this format (e.g., `feat: add new role for component X`).
5. **Update Documentation:**
    * If your changes affect an Ansible role (specifically modifications to `roles/*/defaults/main.yaml`, `roles/*/Chart.yaml`, or `roles/*/README.md.gotmpl`), **do not** edit the role's `README.md` file directly. Instead, edit the corresponding `README.md.gotmpl` template file.
    * A GitHub Action (`.github/workflows/documentation.yml`) uses `helm-docs` to automatically generate the `README.md` from the template when you create a Pull Request containing changes to those specific files. The action will commit the updated `README.md` back to your PR branch.
6. **Submit a Pull Request:**
    * Push your changes to your fork (`git push origin feature/my-new-feature`).
    * Open a Pull Request against the `main` branch of the `axivo/k3s-cluster` repository.
    * Fill out the Pull Request, ensuring you check the relevant boxes in the checklist.
    * Ensure your changes generate no new issues or warnings.
7.  **Code Review:** Project maintainers will review your PR, address any feedback provided. Once approved, your changes will be merged.

### Dependency Management

This project uses [Renovate Bot](https://github.com/renovatebot), to automate dependency updates. Please avoid including unrelated dependency version bumps in your Pull Requests unless the update is directly related to the feature or fix you are contributing.

## License

By contributing to this project, you agree that your contributions will be licensed under the [BSD 3-Clause License](LICENSE) that covers the project.
