import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ListTemplate from 'templates/ListTemplate';
import hero from 'assets/hero_images/hero1.png';
import ListItem from 'components/molecules/ListItem/ListItem';
import { connect } from 'react-redux';
import { fetchArtists as fetchArtistsAction, clearStorage as clearStorageAction } from 'actions';

const TopArtists = ({ fetchArtists, clearStorage, topArtists }) => {
  useEffect(() => {
    fetchArtists('long_term');
  }, []);

  const updateList = (item) => {
    clearStorage();
    setTimeout(() => fetchArtists(item), 75);
  };

  return (
    <ListTemplate image={hero} header="Top Artists" update={updateList}>
      {/*{topArtists.map((item, index) => {
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
      })}*/}
    </ListTemplate>
  );
};

const mapStateToProps = (state) => {
  const { topArtists } = state;
  return { topArtists };
};

const mapDispatchToProps = (dispatch) => ({
  fetchArtists: (time) => dispatch(fetchArtistsAction(time)),
  clearStorage: () => dispatch(clearStorageAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TopArtists);

TopArtists.propTypes = {
  fetchArtists: PropTypes.func.isRequired,
  clearStorage: PropTypes.func.isRequired,
  topArtists: PropTypes.arrayOf(PropTypes.object).isRequired,
};
