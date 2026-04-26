# AGENTS instructions

This repository is a standalone checkout for developing Datagrok plugins
and updating documentation for the `public` repository. 
It reuses selected files and directories from the main Datagrok `public` repository via symlinks 
instead of copying the repo.

## Primary Instructions

- Treat `CLAUDE.md` as the main Datagrok development guide for build, publish, test, package structure, and platform conventions.
- For each folder look for `CLAUDE.md` and `README.md` files and follow the instructions there. 
- Do not duplicate instructions from `CLAUDE.md` here. Follow it unless this file adds repo-specific constraints.

## Skills
- To publish packages on the test enviroment, use the command `grok publish local`.
- If nesessary, use the local skill mirror under `.claude/skills`, and follow the skill content from there.

## Standalone Repo Layout

This repo currently depends on these upstream symlinks:

- [CLAUDE.md](datagrok-plugins/CLAUDE.md) -> `../public/CLAUDE.md`
- [Skills](datagrok-plugins/.claude) -> `../public/.claude`
- [js-api](datagrok-plugins/js-api) -> `../public/js-api`
- [tools](datagrok-plugins/tools) -> `../public/tools`
- [hooks](datagrok-plugins/hooks) -> `../public/hooks`
- [help](datagrok-plugins/help) -> `../public/help`
- [commitlint.config.js](commitlint.config.js) -> `../public/commitlint.config.js`
- [globals.d.ts](globals.d.ts) -> `../public/globals.d.ts`

## Current Development Scope
- Prefer the existing package scripts over inventing ad hoc commands:
  - `npm run build`
  - `npm run link-all`
  - `grok test ...`
- For Datagrok-specific guidelines, follow the description in `help` and `js-api` folders

## Dependency Expectations

- For normal work inside this repo, package-local `node_modules` already provide `datagrok-api`, `datagrok-tools`, and the referenced `@datagrok-libraries/*` dependencies.
- If work requires editing Datagrok libraries from source rather than consuming installed packages, add symlinks to the corresponding upstream directories only when needed.
- Likely future candidates are `../public/libraries` or specific library subdirectories. Do not create extra links preemptively.
- If a task requires another upstream folder such as `connectors`, `docker`, or `python-api`, create a symlink or ask the user first.

## Git and Path Notes

- The physical repository path is `/home/gena/programming/datagrok/datagrok-plugins`.
- Some tools may enter through `/home/agent/programming/datagrok/datagrok-plugins`, but git safety checks must use the real `/home/gena/...` path.
- To avoid global git config edits, prefer:
  - `git -c safe.directory=/home/gena/programming/datagrok/datagrok-plugins <command>`

## Working Rules For Agents

- Keep changes inside this repository unless the task explicitly requires modifying the upstream `public` repository.
- Reuse existing scripts, package structure, and skill files instead of copying their instructions into new docs.
- When a missing upstream directory blocks work, either add a symlink to the required path or ask the user before proceeding.
