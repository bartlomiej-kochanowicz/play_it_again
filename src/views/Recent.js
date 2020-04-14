import React, { Component } from 'react';
import ListTemplate from 'templates/ListTemplate';
import hero from 'assets/hero_images/hero3.png';
import ListItem from 'components/molecules/ListItem/ListItem';
import { connect } from 'react-redux';
import { fetchRecent as fetchRecentAction, clearStorage as clearStorageAction } from 'actions';
import PropTypes from 'prop-types';

class Recent extends Component {
  componentDidMount() {
    const { fetchRecent } = this.props;
    fetchRecent();
  }

  updateList = () => {
    const { fetchRecent, clearStorage } = this.props;
    clearStorage();
    setTimeout(() => fetchRecent(), 75);
  };

  convertDate = (played) => {
    const convertDay = (date) => {
      switch (date.getDay()) {
        case 1:
          return 'Mon';
        case 2:
          return 'Tue';
        case 3:
          return 'Wed';
        case 4:
          return 'Thu';
        case 5:
          return 'Fri';
        case 6:
          return 'Sat';
        case 7:
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
      Number(played.slice(17, 19)),
    );

    return `${convertDay(date)} ${date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()}:${
      date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
    }`;
  };

  render() {
    const { recent } = this.props;
    console.log(recent);
    return (
      <ListTemplate image={hero} header="Recently Played" update={this.updateList}>
        {recent.map((item, index) => {
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

          const day = this.convertDate(played);

          return (
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
          );
        })}
      </ListTemplate>
    );
  }
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
  clearStorage: PropTypes.func.isRequired,
  recent: PropTypes.arrayOf(PropTypes.object).isRequired,
};
