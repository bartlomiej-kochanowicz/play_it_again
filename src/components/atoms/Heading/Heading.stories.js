import React from 'react';
import Heading from './Heading';
import { themeDecorator } from '../../../../.storybook/themeDecorator';

export default {
  title: 'Typology',
  decorators: [themeDecorator],
};

export const MainHeading = () => <Heading>Hello Button</Heading>;
export const BigHeading = () => <Heading big>Hello Button</Heading>;
