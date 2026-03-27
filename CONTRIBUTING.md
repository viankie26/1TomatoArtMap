# Contributing to 1TomatoMap

Thanks for your interest in contributing. This guide explains the expected workflow and engineering standards used in this repository.

## Getting Started

### 1. Clone and install

```bash
git clone https://github.com/viankie26/1TomatoMap.git
cd 1TomatoMap
bun install
```

### 2. Optional: configure environment variables

```bash
cp .env.example .env
```

Environment variables are optional for local development. Check [`.env.example`](./.env.example) for the available entries.

### 3. Start the development server

```bash
bun run dev
```

The app will be available at `http://localhost:5173`.

## Environment Variables

Environment variables are documented in [`.env.example`](./.env.example).

- They are optional for most local work.
- For testing, they should stay unset unless a specific test requires them.
- Access environment values only through `src/core/config.ts`.

## Branch Strategy

Unless maintainers specify otherwise, branch from `main` and open pull requests back to `main`.

## Contribution Flow

1. Open an issue, or discuss the change before starting if the scope is unclear.
2. Create a focused branch such as `fix/geocoding-error` or `feat/svg-export`.
3. Implement the change in a minimal, reviewable diff.
4. Run `bun install`.
5. Run `bun run build` and verify the build passes before opening a PR.
6. Add screenshots for visible UI changes.
7. Open a pull request against the active development branch and fill out the PR template completely.

## Commit Messages

Follow the emoji-style Conventional Commits format used in this repo:

```text
<emoji> <type>(<scope>): <subject>
```

Examples:

```text
✨ feat(theme): add dark mode preset
🐛 fix(geocoding): handle null response from nominatim
📚 docs(readme): update setup instructions
```

## Code Quality

- Keep code clean, readable, and reusable.
- Match the requested behavior and UX, not only a partial interpretation.
- Prefer small, focused modules and functions.
- Reuse shared components, hooks, constants, and utilities where possible.
- Avoid hard-coded values when constants or shared configuration are more appropriate.
- Follow the naming conventions in [`agent.md`](./agent.md).
- Do not bypass the port/adapter architecture. Read [`agent.md`](./agent.md) before adding new infrastructure code.

## AI-Assisted Contributions

AI-assisted coding is allowed, but all generated code must be reviewed, understood, and aligned with the project architecture before submission.

## Contributor License

By submitting a pull request, you agree that your contribution is licensed under the same MIT License as the project.
