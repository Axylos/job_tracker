import React from 'react';
import { Switch } from 'react-router';
import { connect } from 'react-redux';
import styles from "./App.css";
import NavBar from './NavBar';

const ConnectedSwitch = connect(state => ({
  location: state.routerReducer.location
}))(Switch);

const AppContainer = props => (
  <div className="app-containers">
    <NavBar />
    <div className="app-container">
      <ConnectedSwitch>
        {props.children}
      </ConnectedSwitch>
    </div>
  </div>
);
export default connect(state => ({
  location: state.routerReducer.location
}))(AppContainer);
