import React, { Component } from 'react';
import ListTemplate from "templates/ListTemplate";
import hero from 'assets/hero_images/hero2.png';
import ListItem from 'components/molecules/ListItem/ListItem';
import { connect } from 'react-redux';
import { fetchTracks as fetchTracksAction, clearStorage as clearStorageAction } from 'actions';
import PropTypes from "prop-types";

class TopTracks extends Component {
	componentDidMount() {
		const { fetchTracks } = this.props;
		fetchTracks('long_term');
	}

	updateList = (item) => {
		console.log('update');
		const { fetchTracks, clearStorage } = this.props;
		clearStorage();
		setTimeout(() => fetchTracks(item),75);
	};

	render() {
		const { topTracks } = this.props;
		console.log(topTracks);
		return (
			<ListTemplate image={hero} header="Top Tracks" update={this.updateList}>
				{topTracks.map((item, index) => {
					const {
						name,
						artists,
						id,
						album:{
							external_urls: { spotify },
							images
						},

					} = item;

					return (
						<ListItem
							type='track'
							key={id}
							index={index}
							name={name}
							description={artists}
							image={images[2].url}
							link={spotify}
						/>
					);
				})}
			</ListTemplate>
		);
	}
}

const mapStateToProps = (state) => {
	const { topTracks } = state;
	return { topTracks };
};

const mapDispatchToProps = (dispatch) => ({
	fetchTracks: (time) => dispatch(fetchTracksAction(time)),
	clearStorage: () => dispatch(clearStorageAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TopTracks);

TopTracks.propTypes = {
	fetchTracks: PropTypes.func.isRequired,
	clearStorage: PropTypes.func.isRequired,
	topTracks: PropTypes.arrayOf(PropTypes.object).isRequired,
};
