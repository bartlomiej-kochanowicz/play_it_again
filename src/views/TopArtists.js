import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListTemplate from 'templates/ListTemplate';
import hero from 'assets/hero_images/hero1.png';
import ListItem from 'components/molecules/ListItem/ListItem';
import { connect } from 'react-redux';
import { fetchArtists as fetchArtistsAction, clearStorage as clearStorageAction } from 'actions';

class TopArtists extends Component {
  state = {
    time: 'long_term',
  };

  componentDidMount() {
    const { time } = this.state;
    const { fetchArtists } = this.props;
    fetchArtists(time);
  }

  updateList = (item) => {
    console.log('update');
    const { fetchArtists, clearStorage } = this.props;
    clearStorage();
    setTimeout(() => fetchArtists(item),250);
  };

  render() {
    const { topArtists } = this.props;

    return (
      <ListTemplate image={hero} header="Top Artists" update={this.updateList}>
        {topArtists.map((item, index) => {
          const { name, genres, id, images, href } = item;

          return (
            <ListItem
              key={id}
              index={index}
              name={name}
              genres={genres}
              image={images[2].url}
              link={href}
            />
          );
        })}
      </ListTemplate>
    );
  }
}

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
