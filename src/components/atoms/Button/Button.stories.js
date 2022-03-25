import React from 'react';
import Button from './Button';
import { themeDecorator } from '../../../../.storybook/themeDecorator';

export default {
  title: 'Buttons',
  decorators: [themeDecorator],
};

export function MainButton() {
  return <Button>Hello Button</Button>;
}
