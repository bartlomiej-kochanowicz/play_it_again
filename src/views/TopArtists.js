import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ListTemplate from 'templates/ListTemplate';
import hero from 'assets/hero_images/hero1.jpg';
import ListItem from 'components/molecules/ListItem/ListItem';
import { connect } from 'react-redux';
import { fetchArtists as fetchArtistsAction } from 'actions';
import { time as staticTime } from 'utils';

const TopArtists = ({ fetchArtists, topArtists }) => {
  const [time, setTime] = useState(staticTime.longTerm);
  const [listVisible, setListVisibility] = useState(true);

  const updateList = (item) => {
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
  }, []);

  return (
    <ListTemplate image={hero} header="Top Artists" update={updateList}>
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
            <ListItem
              type="artist"
              key={id}
              index={index}
              name={name}
              description={genres}
              image={images[2].url}
              link={spotify}
            />
          );
        })}
    </ListTemplate>
  );
};

const mapStateToProps = (state) => {
  const { topArtists } = state;
  return { topArtists };
};

const mapDispatchToProps = (dispatch) => ({
  fetchArtists: (time) => dispatch(fetchArtistsAction(time)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TopArtists);

TopArtists.propTypes = {
  fetchArtists: PropTypes.func.isRequired,
  topArtists: PropTypes.shape({
    long_term: PropTypes.array,
    medium_term: PropTypes.array,
    short_term: PropTypes.array,
  }).isRequired,
};
