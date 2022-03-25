import React, { useEffect, useState } from 'react';
import LazyLoad from 'react-lazyload';
import PropTypes from 'prop-types';
import ListTemplate from 'templates/ListTemplate';
import hero from 'assets/hero_images/hero2.jpg';
import ListItem from 'components/molecules/ListItem/ListItem';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { fetchArtists as fetchArtistsAction } from 'actions';
import { time as staticTime } from 'utils';
import TimeNavbar from 'components/molecules/TimeNavbar/TimeNavbar';
import ErrorModal from 'components/molecules/ErrorModal/ErrorModal';

const StyledList = styled.ul`
  padding: 20px 0;
  margin: 0;
  list-style: none;
`;

const TopArtists = ({ fetchArtists, topArtists }) => {
  const [time, setTime] = useState(staticTime.longTerm);
  const [listVisible, setListVisibility] = useState(true);

  const updateList = item => {
    if (!topArtists[item].length) {
      fetchArtists(item);
    }
    setListVisibility(false);
    setTime(item);
    setTimeout(() => setListVisibility(true), 200);
  };

  useEffect(() => {
    if (!topArtists.long_term.length) {
      updateList(staticTime.longTerm);
    }
    // fuck this I have no idea how to solve this shit this without tears :,(
    // eslint-disable-next-line
  }, []);

  return (
    <ListTemplate image={hero} header="Top Artists" update={updateList}>
      {topArtists[time] === 'error' ? (
        <ErrorModal />
      ) : (
        <>
          <TimeNavbar update={updateList} />
          <StyledList>
            {listVisible &&
              topArtists[time].map((item, index) => {
                const {
                  name,
                  genres,
                  id,
                  images,
                  external_urls: { spotify },
                } = item;

                return (
                  <LazyLoad key={id} height={100} offset={[-100, 100]}>
                    <ListItem
                      key={id}
                      type="artist"
                      index={index}
                      name={name}
                      description={genres}
                      image={images[2].url}
                      link={spotify}
                    />
                  </LazyLoad>
                );
              })}
          </StyledList>
        </>
      )}
    </ListTemplate>
  );
};

const mapStateToProps = state => {
  const { topArtists } = state;
  return { topArtists };
};

const mapDispatchToProps = dispatch => ({
  fetchArtists: time => dispatch(fetchArtistsAction(time)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TopArtists);

TopArtists.propTypes = {
  fetchArtists: PropTypes.func.isRequired,
  topArtists: PropTypes.shape({
    long_term: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
    medium_term: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
    short_term: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  }).isRequired,
};
