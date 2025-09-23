import { afterEach, beforeEach } from 'vitest';
import { page } from '@vitest/browser/context';
import * as a11yAddonAnnotations from '@storybook/addon-a11y/preview';
import { setProjectAnnotations } from '@storybook/react-vite';
import { screenshot } from '@storycap-testrun/browser';
import * as projectAnnotations from './preview';

setProjectAnnotations([a11yAddonAnnotations, projectAnnotations]);

beforeEach(async () => {
  await page.viewport(1280, 780);
});

afterEach(async (context) => {
  await screenshot(page, context, {});
});
