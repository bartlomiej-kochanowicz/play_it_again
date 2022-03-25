import React from 'react';
import { theme } from 'theme/mainTheme';
import { ThemeProvider } from 'styled-components';

export const themeDecorator = (storyFn) => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);
