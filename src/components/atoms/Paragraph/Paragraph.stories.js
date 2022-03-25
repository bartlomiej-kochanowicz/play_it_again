import React from 'react';
import { Paragraph } from 'components/atoms';
import { themeDecorator } from 'storybook/themeDecorator';

export default {
  title: 'Typology',
  decorators: [themeDecorator],
};

export const MainParagraph = () => <Paragraph>Hello Button</Paragraph>;
