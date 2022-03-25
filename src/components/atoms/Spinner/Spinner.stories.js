import React from 'react';
import Spinner from './Spinner';
import { themeDecorator } from '../../../../.storybook/themeDecorator';

export default {
  title: 'Buttons',
  decorators: [themeDecorator],
};

export function SpinnerLoader() {
  return <Spinner />;
}
