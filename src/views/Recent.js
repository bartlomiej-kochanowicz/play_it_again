import React, { Component } from 'react';
import ListTemplate from "templates/ListTemplate";
import hero from 'assets/hero_images/hero3.png';
/*import spotifyApi, { token } from 'api';*/

class Recent extends Component {
  render() {
    return (
      <ListTemplate image={hero}/>
    );
  }
}

export default Recent;
