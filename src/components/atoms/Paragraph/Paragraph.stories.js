import React from 'react';
import Paragraph from './Paragraph';
import { themeDecorator } from '../../../../.storybook/themeDecorator';

export default {
  title: 'Typology',
  decorators: [themeDecorator],
};

export function MainParagraph() {
  return <Paragraph>Hello Button</Paragraph>;
}
