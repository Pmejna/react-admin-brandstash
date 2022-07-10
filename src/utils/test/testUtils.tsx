import type { ReactElement } from 'react';

import type { RenderOptions, RenderResult } from '@testing-library/react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeContextProvider } from '../../context/ThemeContext';

export type CustomRender<T> = (ui: ReactElement, options?: Omit<RenderOptions, 'queries'>) => T;

const customRender: CustomRender<RenderResult> = (ui, options) =>
  render(ui, { wrapper: ThemeContextProvider, ...options });

// eslint-disable-next-line import/export
export * from '@testing-library/react';

// eslint-disable-next-line import/export
export { customRender as render, userEvent };