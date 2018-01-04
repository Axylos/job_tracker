import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import PrivateRoute from './components/PrivateRoute';
import App from './containers/App';
import Home from './containers/Home';
import Auth from './containers/Auth';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { store, DevTools, history } from './store';

ReactDOM.render(
  <Provider store={store}>
    <div>
      <ConnectedRouter history={history}>
        <MuiThemeProvider>
          <App>
            <PrivateRoute exact path="/" component={Home} />
            <Route path="/auth" component={Auth} />
          </App>
        </MuiThemeProvider>
      </ConnectedRouter>
      <DevTools />
    </div>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
