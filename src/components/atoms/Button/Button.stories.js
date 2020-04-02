import React from 'react';
import Button from './Button';
import { themeDecorator } from '../../../../.storybook/themeDecorator';

export default {
  title: 'Buttons',
  decorators: [themeDecorator],
};

export const MainButton = () => <Button>Hello Button</Button>;
