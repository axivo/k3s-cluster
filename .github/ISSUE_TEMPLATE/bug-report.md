name: Bug Report
about: Create a bug report to help us improve
labels: ["kind/community-report", "kind/bug", "needs/triage"]
body:
  - type: markdown
    attributes:
      value: |
        Thank you for taking the time to fill out this bug report.
  - type: checkboxes
    attributes:
      label: Existing Issues
      description: Please search to see if an issue already exists for the bug you encountered.
      options:
      - label: I have searched the existing issues
        required: true
  - type: textarea
    id: what-happened
    attributes:
      label: What Happened
      description: Also tell us, what did you expect to happen?
      placeholder: |
        1. In this environment ...
        2. With this config ...
        3. Run '...'
        4. See error ...
      value: "A bug happened!"
    validations:
      required: true
  - type: textarea
    id: kernel-version
    attributes:
      label: OS Kernel Version
      description: Which OS kernel version is Kubernetes running on? (run `uname -a`)
    validations:
      required: true
  - type: textarea
    id: k8s-version
    attributes:
      label: Kubernetes Version
      description: Which Kubernetes version are you running? (run `kubectl version`)
    validations:
      required: true
  - type: textarea
    id: logs
    attributes:
      label: Relevant Output
      description: Please copy and paste any relevant output. This will be automatically formatted into code, so no need for backticks.
      render: shell
  - type: textarea
    attributes:
      label: Anything Else
      description: |
        Links? References? Anything that will provide more context about the issue you are encountering.
        Tip: You can attach images or log files by clicking this area to highlight it and then dragging files in.
    validations:
      required: false
  - type: checkboxes
    id: terms
    attributes:
      label: Code of Conduct
      description: By submitting this issue, you agree to follow our [Code of Conduct](https://github.com/axivo/k3s-cluster/blob/main/CODE_OF_CONDUCT.md)
      options:
        - label: I agree to follow this project's Code of Conduct
          required: true
