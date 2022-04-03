import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'store';
import MainTemplate from 'templates/MainTemplate';
import Views from 'views';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from 'serviceWorker';

const App = () => (
  <Provider store={store}>
    <MainTemplate>
      <BrowserRouter>
        <Views />
      </BrowserRouter>
    </MainTemplate>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();
