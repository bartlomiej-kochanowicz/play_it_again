import React, { Component } from 'react';
import spotifyApi, { token } from 'api';

class TopArtists extends Component {
  state = {
    loggedIn: !!token,
    nowPlaying: { name: 'Not Checked', albumArt: '' },
  };

  getNowPlaying() {
    spotifyApi.getMyCurrentPlaybackState().then((response) => {
      this.setState({
        nowPlaying: {
          name: response.item.name,
          albumArt: response.item.album.images[0].url,
        },
      });
    });
  }

  render() {
    const { nowPlaying, loggedIn } = this.state;
    return (
      <>
        <div>Now Playing: {nowPlaying.name}</div>
        <div>
          <img alt="album cover" src={nowPlaying.albumArt} style={{ height: 150 }} />
        </div>
        {loggedIn && <button onClick={() => this.getNowPlaying()}>Check Now Playing</button>}
      </>
    );
  }
}

export default TopArtists;
