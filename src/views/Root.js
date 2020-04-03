import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import { routes } from 'routes';
import LoginPage from './LoginPage';
import AppInfo from './AppInfo';
import TopArtists from './TopArtists';

const Root = () => (
  <BrowserRouter>
    <MainTemplate>
      <Switch>
        <Route exact path={routes.home} render={() => <Redirect to="/login" />} />
        <Route exact path={routes.login} component={LoginPage} />
        <Route exact path={routes.app_info} component={AppInfo} />
        <Route exact path={routes.top_artists} component={TopArtists} />
        <Route exact path={routes.top_tracks} component={TopArtists} />
        <Route exact path={routes.recent} component={TopArtists} />
      </Switch>
    </MainTemplate>
  </BrowserRouter>
);

export default Root;
