import React from 'react';
import { Star } from '@styled-icons/fa-regular/Star';
import { Heart } from '@styled-icons/fa-regular/Heart';
import { Clock } from '@styled-icons/fa-regular/Clock';
import ButtonIcon from './ButtonIcon';
import { themeDecorator } from '../../../../.storybook/themeDecorator';

export default {
  title: 'ButtonIcons',
  decorators: [themeDecorator],
};

export const StarIcon = () => (
  <>
    <ButtonIcon icon={Star} />
  </>
);
export const HeartIcon = () => (
  <>
    <ButtonIcon icon={Heart} />
  </>
);
export const ClockIcon = () => (
  <>
    <ButtonIcon icon={Clock} />
  </>
);
