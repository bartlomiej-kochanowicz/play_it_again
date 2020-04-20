import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Cover from 'components/molecules/Cover/Cover';
import Heading from '../../atoms/Heading/Heading';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  grid-area: info;
  box-shadow: 0 0 21px -3px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  padding: 20px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 10px;
  }
`;

const StyledInnerWrapper = styled.div`
  margin-top: 20px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-row-gap: 20px;
`;

const StyledCover = styled(Cover)`
  width: 100px;
  height: 100px;
`;

const CoverWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const DashboardNewReleases = ({ albums }) => {
  return (
    <StyledWrapper>
      <Heading>New Releases</Heading>
      <StyledInnerWrapper>
        {albums.map((item) => (
          <CoverWrapper key={item.id}>
            <StyledCover image={item.images[0].url} url={item.external_urls.spotify} />
          </CoverWrapper>
        ))}
      </StyledInnerWrapper>
    </StyledWrapper>
  );
};

export default DashboardNewReleases;

DashboardNewReleases.propTypes = {
  albums: PropTypes.arrayOf(PropTypes.object).isRequired,
};
