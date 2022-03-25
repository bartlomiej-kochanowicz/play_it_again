import React from 'react';
import { Button } from 'components/atoms';
import { themeDecorator } from 'storybook/themeDecorator';

export default {
  title: 'Buttons',
  decorators: [themeDecorator],
};

export const MainButton = () => <Button>Hello Button</Button>;
