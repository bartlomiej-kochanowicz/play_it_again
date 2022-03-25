import React from 'react';
import Heading from './Heading';
import { themeDecorator } from '../../../../.storybook/themeDecorator';

export default {
  title: 'Typology',
  decorators: [themeDecorator],
};

export function MainHeading() {
  return <Heading>Hello Button</Heading>;
}
export function BigHeading() {
  return <Heading big>Hello Button</Heading>;
}
