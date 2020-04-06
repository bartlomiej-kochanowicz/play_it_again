import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListTemplate from 'templates/ListTemplate';
import hero from 'assets/hero_images/hero1.png';
import ListItem from 'components/molecules/ListItem/ListItem';
import { connect } from 'react-redux';
import { fetchArtists as fetchArtistsAction } from 'actions';

class TopArtists extends Component {
  componentDidMount() {
    const { fetchArtists } = this.props;
    fetchArtists('long_term');
  }

  render() {
    /*const { topArtists } = this.props;*/
    const topArtists = JSON.parse(window.localStorage.getItem('topArtists'));

    return (
      <ListTemplate image={hero} header="Top Artists">
        {topArtists.map((item, index) => {
          const { name, genres,id,images, href,followers} = item;

          return <ListItem key={id} index={index} name={name} genres={genres} image={images[2].url} link={href} followers={followers.total} /> ;
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
  fetchArtists: () => dispatch(fetchArtistsAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TopArtists);

TopArtists.propTypes = {
  fetchArtists: PropTypes.func.isRequired,
  topArtists: PropTypes.arrayOf(PropTypes.object).isRequired,
};
