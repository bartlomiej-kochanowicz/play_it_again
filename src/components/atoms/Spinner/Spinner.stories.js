import React from 'react';
import { Spinner } from 'components/atoms';
import { themeDecorator } from 'storybook/themeDecorator';

export default {
  title: 'Buttons',
  decorators: [themeDecorator],
};

export function SpinnerLoader() {
  return <Spinner />;
}
