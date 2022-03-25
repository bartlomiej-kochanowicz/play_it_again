import React from 'react';
import TimeButton from './TimeButton';
import { themeDecorator } from '../../../../.storybook/themeDecorator';

export default {
  title: 'Buttons',
  decorators: [themeDecorator],
};

export function TimeNavButton() {
  return <TimeButton>Top Artists</TimeButton>;
}
