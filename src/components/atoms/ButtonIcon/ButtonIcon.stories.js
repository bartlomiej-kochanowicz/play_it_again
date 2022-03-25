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

export function StarIcon() {
  return <ButtonIcon icon={Star} />;
}
export function HeartIcon() {
  return <ButtonIcon icon={Heart} />;
}
export function ClockIcon() {
  return <ButtonIcon icon={Clock} />;
}
