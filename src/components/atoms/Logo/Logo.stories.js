import React from 'react';
import Logo from './Logo';
import { themeDecorator } from '../../../../.storybook/themeDecorator';

export default {
  title: 'Logos',
  decorators: [themeDecorator],
};

export const MainLogo = () => <Logo />;
