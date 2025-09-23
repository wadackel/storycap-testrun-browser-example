# Visual Regression Testing Sample Project for `@storycap-testrun/browser`

A sample project demonstrating Visual Regression Testing (VRT) using `@storybook-testrun/browser`.

## Architecture

VRT is implemented using the following toolchain. You can customize the Storybook Framework to your preference.

- [@storycap-testrun/browser](https://github.com/reg-viz/storycap-testrun/tree/main/packages/browser)
- [@storybook/react-vite](https://storybook.js.org/docs/get-started/frameworks/react-vite?renderer=react)
- [@storybook/addon-vitest](https://storybook.js.org/docs/writing-tests/integrations/vitest-addon)
- [@vitest/browser](https://vitest.dev/guide/browser/)
- [vitest](https://vitest.dev)
- [playwright](https://playwright.dev)
- [reg-viz/reg-actions](https://github.com/reg-viz/reg-actions)

> [!TIP]
> We recommend using playwright with chromium to access the full features of `@storycap-testrun/browser`.

This configuration enables VRT with a very simple setup. By using `@storybook/addon-vitest` to build Storybook's test environment and integrating `@storycap-testrun/browser` into the browser-executable test infrastructure, it captures screenshots of executed Story test results.

Once screenshots are captured, VRT can be achieved entirely within GitHub Actions using `reg-viz/reg-actions`.

While this is a minimal configuration, we hope it provides hints for applying to actual projects.

## Development

Install dependencies using pnpm.

```bash
pnpm i
```

Next, install playwright dependencies.

```bash
pnpm exec playwright install --with-deps chromium
```

Finally, run `vitest`.

```bash
pnpm test
```
