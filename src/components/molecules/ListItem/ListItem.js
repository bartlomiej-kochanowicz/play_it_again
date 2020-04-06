import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import PropTypes from 'prop-types';

const appear = keyframes`
  from{
    opacity: 0;
    transform: translateY(-10px);
  }
  to{
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledImage = styled.div`
  box-sizing: border-box;
  background: url(${({ image }) => image}) center;
  width: 95px;
  height: 85px;
  background-size: cover;
  border-radius: 3px;
  margin-right: 23px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 75px;
    width: 85px;
    margin-right: 13px;
  }
`;
const StyledLink = styled.a`
  display: flex;
  text-decoration: none;
  color: ${({ theme }) => theme.spotifyBlack};
  padding: 17px 20px;
  align-items: center;
  transition: 0.3s;
  animation: ${appear} 0.5s ${({ delay }) => `.${delay + 1}s`} both;
  :hover {
    background-color: ${({ theme }) => theme.grey100};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 17px 15px;
  }
`;

const StyledNumber = styled.span`
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.grey300};
  font-weight: ${({ theme }) => theme.bold};
  margin-right: 23px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-right: 13px;
  }
`;

const StyledInfo = styled.span`
  display: block;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.m};
  ${({ secondary }) =>
    secondary &&
    css`
      font-weight: ${({ theme }) => theme.regular};
      color: ${({ theme }) => theme.grey300};
      font-size: ${({ theme }) => theme.fontSize.s};
      display: inline-block;
      width: 70%;
    `};
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSize.s};

    ${({ secondary }) =>
      secondary &&
      css`
        font-size: ${({ theme }) => theme.fontSize.xs};
      `};
  }
`;

const StyledInnerWrapper = styled.div`
  width: 100%;
`;

const ListItem = ({ type,index, name, description, image, link }) => (
  <li>
    <StyledLink href={link} target="_blank" rel="noopener noreferrer" delay={index}>
      <StyledNumber>{index + 1}</StyledNumber>
      <StyledImage image={image} />
      <StyledInnerWrapper>
        <StyledInfo>{name}</StyledInfo>
        <StyledInfo secondary>{description.map((item) => type==='artist' ? `${item}, ` : `${item.name}, `)}</StyledInfo>
      </StyledInnerWrapper>
    </StyledLink>
  </li>
);

export default ListItem;

ListItem.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object])).isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
