import type { ScreenshotParameters } from '@storycap-testrun/browser';

declare module '@storybook/react-vite' {
  interface Parameters {
    screenshot?: ScreenshotParameters;
  }
}
