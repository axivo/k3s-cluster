#!/usr/bin/env bash

if ! command -v helm-docs >/dev/null 2>&1; then
    echo 'helm-docs is not installed'
    exit 1
fi
declare -a roles=(
    victoriametrics
)
for role in ${roles[@]}; do
    pushd ./roles/$role >/dev/null 2>&1
    helm-docs -f ./defaults/main.yaml -l error -s --skip-version-footer
    if [ $? -eq 0 ]; then result='generated'; else result='failed'; fi
    echo "Documentation $result for '$role' role."
    popd >/dev/null 2>&1
done
unset result roles
