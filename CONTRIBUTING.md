# Contributing to @eox/ui

Thank you for your interest in contributing to `@eox/ui`. This library provides a stable wrapper around BeerCSS for EOX applications.

## Stability Strategy (v1.x.x)

To ensure that downstream software remains stable, we follow these guidelines:

1.  **Pin Upstream Versions:** Always pin `beercss` to an exact version in `package.json`.
2.  **Semantic Versioning:**
    - **Patch:** Bug fixes and minor CSS adjustments.
    - **Minor:** New UI components or **non-breaking** `beercss` updates.
    - **Major:** Any `beercss` update that requires HTML markup changes or removes classes.
3.  **Visual Verification:** Any change to `lib/` or `style/` must be verified in `playground.html` to ensure no regression in standard EOX layouts.

## Development Workflow

### Setup

```bash
npm install
```

### Formatting

We use Prettier for consistent code style.

```bash
npm run format
```

### Testing

Ensure all tests pass before submitting a PR.

```bash
npm test
```

### Making Changes

1.  Check if a similar component already exists in `lib/beercss/` or `lib/vuetify/`.
2.  If adding a new style, prefer using CSS variables defined in [lib/beercss/variables.css](lib/beercss/variables.css).
3.  Update [playground.html](playground.html) to demonstrate the new feature or fix.

## Releasing

We use GitHub Actions for publishing. A new version is atutomatically published when a new Git tag is pushed.

1.  Update version in `package.json`.
2.  Commit and push.
3.  Tag the commit: `git tag v1.0.0 && git push origin v1.0.0`.
