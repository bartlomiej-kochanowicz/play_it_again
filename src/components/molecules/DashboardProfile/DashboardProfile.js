import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';

const StyledWrapper = styled.div`
  box-shadow: 0 0 33px -17px rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  padding: 20px;
  grid-area: profil;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 20px;
  }
`;

const StyledAvatar = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  box-shadow: 0 0 21px -3px rgba(0, 0, 0, 0.25);
  background-image: url(${({ image }) => image});
  background-position: center;
  background-size: cover;
  margin-bottom: 1.5rem;
`;

const StyledLink = styled.a`
  color: #fff;
  text-decoration: none;
`;

const StyledButton = styled(Button)`
  width: 100%;
`;

function DashboardProfile({ image, name, followers, link }) {
  return (
    <StyledWrapper>
      <StyledAvatar image={image} />
      <Heading>{name}</Heading>
      <Paragraph>
        Total followers: <strong>{followers}</strong>
      </Paragraph>
      <StyledButton>
        <StyledLink href={link} target="_blank" rel="noopener noreferrer">
          Visit profile
        </StyledLink>
      </StyledButton>
    </StyledWrapper>
  );
}

export default DashboardProfile;

DashboardProfile.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  link: PropTypes.string.isRequired,
};
