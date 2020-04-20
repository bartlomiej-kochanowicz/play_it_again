import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Paragraph from '../../atoms/Paragraph/Paragraph';

const StyledWrapper = styled.a`
  display: block;
  color: ${({ theme }) => theme.spotifyBlack};
  text-decoration: none;
`;
const StyledImage = styled.div`
  position: relative;
  width: 125px;
  height: 125px;
  border-radius: 20px;
  background-image: url(${({ image }) => image});
  box-shadow: 0 0 21px -3px rgba(0, 0, 0, 0.3);
  background-size: cover;
  transition: 0.3s;

  &:before {
    content: '';
    width: 100%;
    height: 100%;
    border-radius: 20px;
    position: absolute;
    top: 0;
    left: 0;
    background-color: black;
    opacity: 0;
    transition: 0.3s;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      box-shadow: 0 0 35px -3px rgba(0, 0, 0, 0.4);
      transform: scale(1.05);
      &:before {
        opacity: 0.1;
      }
    `}
  ${({ isBig }) =>
    !isBig &&
    css`
      width: 100px;
      height: 100px;
    `};
`;

const StyledParagraph = styled(Paragraph)`
  width: 125px;
  font-weight: ${({ theme }) => theme.bold};
  margin: 10px 0;
`;

const StyledInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Cover = ({ url, image, name, big }) => {
  const [isActive, setActive] = useState(false);

  const handleEnter = () => {
    setActive(true);
  };

  const handleLeave = () => {
    setActive(false);
  };

  return (
    <StyledWrapper
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <StyledInnerWrapper>
        <StyledImage image={image} isActive={isActive} isBig={big} />
        {big && <StyledParagraph>{name}</StyledParagraph>}
      </StyledInnerWrapper>
    </StyledWrapper>
  );
};

export default Cover;

Cover.propTypes = {
  url: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string,
  big: PropTypes.bool,
};

Cover.defaultProps = {
  name: '',
  big: false,
};
