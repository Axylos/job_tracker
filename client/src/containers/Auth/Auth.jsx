import React from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardHeader, CardText, CardActions } from 'material-ui/Card';
import styles from './auth.css';
import * as authActions from './auth.actions';

class AuthContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      username: '',
      password: ''
    }
  }

  handleInputChange(ev, val) {
    this.setState({
      [ev.target.name]: val
    });
  }

  handleSubmit(ev) {
    ev.preventDefault();
    this.props.validateRegistration(this.state);
  }

  render() {
    return (
      <Card className="auth-container">
        <form onSubmit={this.handleSubmit} autoComplete="false">
          <CardHeader>Register</CardHeader>
          <CardText>
            <TextField
              name="username"
              onChange={this.handleInputChange}
              floatingLabelText="Username" />
            <br/>
            <TextField
              type="password"
              floatingLabelText="Password"
              name="password" 
              onChange={this.handleInputChange} />
          </CardText>
          <CardActions className="auth-action">
            <RaisedButton type="submit" label="Register" primary={true} />
          </CardActions>
        </form>
      </Card>
    );
  }
}

export default connect(state => (
  { isAuthenticated: state.authReducer.isAuthenticated }),
  { validateRegistration: authActions.validateRegistration }
)(AuthContainer);
