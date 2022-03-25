import React from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import PropTypes from 'prop-types';
import Cover from 'components/molecules/Cover/Cover';

const StyledWrapper = styled.div`
  grid-area: ${({ position }) => position};
  box-shadow: 0 0 21px -3px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  padding: 20px;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 10px;
  }
`;

const StyledInnerWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-row-gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileXl}) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

const StyledHeading = styled(Heading)`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  margin-bottom: 40px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-bottom: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;

const DashboardPlaylists = ({ playlists, position }) => {
  const {
    message,
    playlists: { items },
  } = playlists;

  return (
    <StyledWrapper position={position}>
      <StyledHeading>{message}</StyledHeading>
      <StyledInnerWrapper>
        {items.length > 0 &&
          items.map(item => (
            <Cover
              big
              url={item.external_urls.spotify}
              image={item.images[0].url}
              name={item.name}
              key={item.id}
            />
          ))}
      </StyledInnerWrapper>
    </StyledWrapper>
  );
};

export default DashboardPlaylists;

DashboardPlaylists.propTypes = {
  playlists: PropTypes.shape({
    message: PropTypes.string,
    playlists: PropTypes.object,
  }).isRequired,
  position: PropTypes.string.isRequired,
};
