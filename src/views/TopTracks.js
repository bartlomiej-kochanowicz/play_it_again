import React, { Component } from 'react';
import UserPageTemplate from "templates/UserPageTemplate";
/*import spotifyApi, { token } from 'api';*/

class TopArtists extends Component {

	render() {
		return (
			<UserPageTemplate>
				<h1>Top Tracks</h1>
			</UserPageTemplate>
		);
	}
}

export default TopArtists;
