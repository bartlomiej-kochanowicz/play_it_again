import React from 'react';
import { TimeButton } from 'components/atoms';
import { themeDecorator } from 'storybook/themeDecorator';

export default {
  title: 'Buttons',
  decorators: [themeDecorator],
};

export const TimeNavButton = () => <TimeButton>Top Artists</TimeButton>;
