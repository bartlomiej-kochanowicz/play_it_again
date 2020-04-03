import React from 'react';
import StoryRouter from 'storybook-react-router';
import Sidebar from './Sidebar';
import { themeDecorator } from '../../../../.storybook/themeDecorator';

export default {
  title: 'Sidebar',
  decorators: [themeDecorator, StoryRouter()],
};

export const MainSidebar = () => <Sidebar />;
