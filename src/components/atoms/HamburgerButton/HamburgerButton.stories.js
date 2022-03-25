import React from 'react';
import { themeDecorator } from '../../../../.storybook/themeDecorator';
import HamburgerButton from './HamburgerButton';

export default {
  title: 'Buttons',
  decorators: [themeDecorator],
};

export function HamburgerBtn() {
  return <HamburgerButton />;
}
