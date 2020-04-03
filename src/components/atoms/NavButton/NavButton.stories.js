import React from 'react';
import { Star } from '@styled-icons/fa-regular/Star';
import { Heart } from '@styled-icons/fa-regular/Heart';
import { Clock } from '@styled-icons/fa-regular/Clock';
import { themeDecorator } from '../../../../.storybook/themeDecorator';
import NavButton from './NavButton';

export default {
  title: 'Sidebar',
  decorators: [themeDecorator],
};

export const TopArtists = () => <NavButton icon={Star}>Top Artists</NavButton>;
export const TopTracks = () => <NavButton icon={Heart}>Top Tracks</NavButton>;
export const Recent = () => <NavButton icon={Clock}>Recent</NavButton>;
