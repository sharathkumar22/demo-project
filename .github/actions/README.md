# Github Actions: composite actions

Composite actions file name must be named `action.y(a)ml`.

## Actions
| Name | Description |
| Setup and Cache | Setup a NodeJS environment and set, and restore if any, cache, given a node version. If no cache is found, then dependencies will be installed |


Sources:

- [Composite actions doc: getting started](https://docs.github.com/en/actions/creating-actions/creating-a-composite-action)
- [Composite actions doc: syntax](https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions#runs-for-composite-actions)
- [Blog 09-Nov-2021: conditional steps now supported in composite actions](https://github.blog/changelog/2021-11-09-github-actions-conditional-execution-of-steps-in-actions/)
