import React from 'react';
import { themeDecorator } from 'storybook/themeDecorator';
import { TimeNavbar } from 'components/molecules';

export default {
  title: 'TimeNavbar',
  decorators: [themeDecorator],
};

export function TimeNavbarMobule() {
  return <TimeNavbar />;
}
