import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi();

if(!window.sessionStorage.getItem('hash')){
  window.sessionStorage.setItem('hash', window.location.hash);
}

function getHashParams() {
  const hashParams = {};
  let e;
  const r = /([^&;=]+)=?([^&;]*)/g;
  const q = window.sessionStorage.getItem('hash').substring(1);
  e = r.exec(q);
  while (e) {
    hashParams[e[1]] = decodeURIComponent(e[2]);
    e = r.exec(q);
  }
  window.location.hash = '';
  return hashParams;
}

const params = getHashParams();
export const token = params.access_token;
if (token) {
  spotifyApi.setAccessToken(token);
}

export default spotifyApi;
