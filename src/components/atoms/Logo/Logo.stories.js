import React from 'react';
import { Logo } from 'components/atoms';
import { themeDecorator } from 'storybook/themeDecorator';

export default {
  title: 'Logos',
  decorators: [themeDecorator],
};

export function MainLogo() {
  return <Logo />;
}
