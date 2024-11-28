#!/usr/bin/env bash

if ! command -v helm-docs >/dev/null 2>&1; then
    echo 'helm-docs is not installed'
    exit 1
fi
declare -a roles=(
    victoriametrics
)
for role in "${roles[@]}"; do
    pushd "./roles/$role" >/dev/null 2>&1 || exit 1
    result='failed'
    if helm-docs -f ./defaults/main.yaml -l error -s --skip-version-footer; then
        result='generated'
    fi
    echo "Documentation $result for '$role' role"
    popd >/dev/null 2>&1 || exit 1
done
unset result role roles
