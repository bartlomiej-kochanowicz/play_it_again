import React from 'react';
import { useRoutes } from 'react-router-dom';
import { paths } from 'routes/paths';
import LoginPage from 'views/LoginPage';
import AppInfo from 'views/AppInfo';
import TopArtists from 'views/TopArtists';
import TopTracks from 'views/TopTracks';
import Recent from 'views/Recent';
import Dashboard from 'views/Dashboard';

const Views = () => {
  const routes = useRoutes([
    { path: paths.home, element: <LoginPage /> },
    { path: paths.login, element: <LoginPage /> },
    { path: paths.app_info, element: <AppInfo /> },
    { path: paths.dashboard, element: <Dashboard /> },
    { path: paths.top_artists, element: <TopArtists /> },
    { path: paths.top_tracks, element: <TopTracks /> },
    { path: paths.recent, element: <Recent /> },
  ]);

  return routes;
};

export default Views;
