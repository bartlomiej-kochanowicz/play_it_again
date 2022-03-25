import React from 'react';
import { Star } from '@styled-icons/fa-regular/Star';
import { Heart } from '@styled-icons/fa-regular/Heart';
import { Clock } from '@styled-icons/fa-regular/Clock';
import { NavButton } from 'components/atoms';
import { themeDecorator } from '../../../../.storybook/themeDecorator';

export default {
  title: 'Sidebar',
  decorators: [themeDecorator],
};

export function TopArtists() {
  return <NavButton icon={Star}>Top Artists</NavButton>;
}
export function TopTracks() {
  return <NavButton icon={Heart}>Top Tracks</NavButton>;
}
export function Recent() {
  return <NavButton icon={Clock}>Recent</NavButton>;
}
