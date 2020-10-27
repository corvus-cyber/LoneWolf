import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
  <BrowserRouter>
    <Auth0Provider
      domain="dev-i9pv14xc.us.auth0.com"
      clientId="'avn3Nb54qAqLyEOXUMpRFVdFPxxopLFW"
      redirectUri={window.location.origin}
    >
      <React.Fragment>
        <App />
      </React.Fragment>
    </Auth0Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
