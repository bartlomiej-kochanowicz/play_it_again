import React from 'react';
import TimeNavbar from './TimeNavbar';
import { themeDecorator } from '../../../../.storybook/themeDecorator';

export default {
  title: 'TimeNavbar',
  decorators: [themeDecorator],
};

export function TimeNavbarMobule() {
  return <TimeNavbar />;
}
