import React from 'react';
import { HamburgerButton } from 'components/atoms';
import { themeDecorator } from '../../../../.storybook/themeDecorator';

export default {
  title: 'Buttons',
  decorators: [themeDecorator],
};

export function HamburgerBtn() {
  return <HamburgerButton />;
}
