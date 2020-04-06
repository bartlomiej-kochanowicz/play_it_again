import React from 'react';
import styled, { css } from 'styled-components';

const StyledImage = styled.div`
  background: url(${({ image }) => image});
  width: 70px;
  height: 84px;
  position: center;
  background-size: cover;
  border-radius: 3px;
`;
const StyledLink = styled.a`
  display: flex;
  text-decoration: none;
  color: ${({ theme }) => theme.spotifyBlack};
  padding: 17px 20px;
  align-items: center;
  transition: 0.3s;

  :hover {
    background-color: ${({ theme }) => theme.grey100};
  }
`;

const StyledNumber = styled.span`
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.grey300};
  font-weight: ${({ theme }) => theme.bold};
  margin-right: 23px;
`;

const StyledInfo = styled.span`
  display: block;
  margin-left: 23px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.m};
  ${({ secondary }) => secondary && css`
		font-weight: ${({ theme }) => theme.regular};
		color: ${({ theme }) => theme.grey300};
		font-size: ${({ theme }) => theme.fontSize.s};
	`};
`;
const ListItem = ({ index, name, genres, image, link, followers }) => (
  <li>
    <StyledLink href={link} target="_blank" rel="noopener noreferrer">
      <StyledNumber>{index + 1}</StyledNumber>
      <StyledImage image={image} />
      <div>
        <StyledInfo>{name}</StyledInfo>
        <StyledInfo secondary>{genres.map((item) => `${item}, `)}</StyledInfo>
      </div>
    </StyledLink>
  </li>
);

export default ListItem;
