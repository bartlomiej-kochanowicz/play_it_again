import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store';
import MainTemplate from 'templates/MainTemplate';
import { routes } from 'routes';
import LoginPage from './LoginPage';
import AppInfo from './AppInfo';
import TopArtists from './TopArtists';
import TopTracks from './TopTracks';
import Recent from './Recent';
import Dashboard from './Dashboard';

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route exact path={routes.home} render={() => <Redirect to="/login" />} />
          <Route exact path={routes.login} component={LoginPage} />
          <Route exact path={routes.app_info} component={AppInfo} />
          <Route exact path={routes.dashboard} component={Dashboard} />
          <Route exact path={routes.top_artists} component={TopArtists} />
          <Route exact path={routes.top_tracks} component={TopTracks} />
          <Route exact path={routes.recent} component={Recent} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  </Provider>
);

export default Root;
