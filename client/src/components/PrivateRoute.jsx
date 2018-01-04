import React from 'react';
import { Redirect, Route } from 'react-router';
import { connect } from 'react-redux';

class PrivateRoute extends React.Component {
  render() {
    const {
      isAuthenticated,
      component: Component,
      ...props
    } = this.props;

    return (
      <Route
        {...props}
        render={props =>
          isAuthenticated
            ? <Component {...props} />
            : (
              <Redirect to={{
                pathname: '/auth',
                state: { from: props.location }
              }} />
            )
          }
      />
    );
  }
}

export default connect(state => ({
  isAuthenticated: false
}))(PrivateRoute);
