import React from 'react';
import StoryRouter from 'storybook-react-router';
import { themeDecorator } from 'storybook/themeDecorator';
import { Sidebar } from 'components/organisms';

export default {
  title: 'Sidebar',
  decorators: [themeDecorator, StoryRouter()],
};

export function MainSidebar() {
  return <Sidebar />;
}
