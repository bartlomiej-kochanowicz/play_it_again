import React, { Component } from 'react';
import ListTemplate from "templates/ListTemplate";
import hero from 'assets/hero_images/hero2.png';
/*import spotifyApi, { token } from 'api';*/

class TopArtists extends Component {

	render() {
		return (
			<ListTemplate image={hero} header="Top Tracks"/>
		);
	}
}

export default TopArtists;
