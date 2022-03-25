import React, { useEffect } from 'react';
import LazyLoad from 'react-lazyload';
import styled from 'styled-components';
import ListTemplate from 'templates/ListTemplate';
import hero from 'assets/hero_images/hero4.jpg';
import ListItem from 'components/molecules/ListItem/ListItem';
import ErrorModal from 'components/molecules/ErrorModal/ErrorModal';
import { connect } from 'react-redux';
import {
  fetchRecent as fetchRecentAction,
  clearStorage as clearStorageAction,
} from 'actions';
import PropTypes from 'prop-types';

const StyledList = styled.ul`
  padding: 40px 0;
  margin: 0;
  list-style: none;
`;

function Recent({ fetchRecent, recent }) {
  useEffect(() => {
    fetchRecent();
    // eslint-disable-next-line
  }, []);

  const updateList = () => {
    setTimeout(() => fetchRecent(), 75);
  };

  const convertDate = (played) => {
    const convertDay = (date) => {
      switch (date.getDay()) {
        case 0:
          return 'Mon';
        case 1:
          return 'Tue';
        case 2:
          return 'Wed';
        case 3:
          return 'Thu';
        case 4:
          return 'Fri';
        case 5:
          return 'Sat';
        case 6:
          return 'Sun';
        default:
          return '';
      }
    };

    const date = new Date(
      Number(played.slice(0, 4)),
      Number(played.slice(5, 7)),
      Number(played.slice(8, 10)),
      Number(played.slice(11, 13)),
      Number(played.slice(14, 16)),
      Number(played.slice(17, 19))
    );

    return `${convertDay(date)} ${
      date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
    }:${date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}`;
  };

  return (
    <ListTemplate image={hero} header="Recently played" update={updateList}>
      <StyledList>
        {recent === 'error' ? (
          <ErrorModal />
        ) : (
          recent.map((item, index) => {
            const {
              track: {
                album: {
                  artists,
                  external_urls: { spotify },
                  images,
                },
                name,
              },
              played_at: played,
            } = item;

            const day = convertDate(played);

            return (
              <LazyLoad key={played} height={100} offset={[-100, 100]}>
                <ListItem
                  type="recent"
                  key={played}
                  index={index}
                  name={name}
                  description={artists}
                  image={images[2].url}
                  link={spotify}
                  played={day}
                />
              </LazyLoad>
            );
          })
        )}
      </StyledList>
    </ListTemplate>
  );
}

const mapStateToProps = (state) => {
  const { recent } = state;
  return { recent };
};

const mapDispatchToProps = (dispatch) => ({
  fetchRecent: () => dispatch(fetchRecentAction()),
  clearStorage: () => dispatch(clearStorageAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Recent);

Recent.propTypes = {
  fetchRecent: PropTypes.func.isRequired,
  recent: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.string,
  ]).isRequired,
};
