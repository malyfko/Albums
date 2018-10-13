import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';

import { Card, CardSection, Button, Input, Spinner } from 'components/common';
import { COLORS } from 'consts/index';

export class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    errorMessage: '',
    loading: false,
  };

  handleLogin = () => {
    const { email, password } = this.state;

    this.setState({
      errorMessage: '',
      loading: true,
    });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.handleLoginSuccess)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.handleLoginSuccess)
          .catch(this.handleLoginFail);
      });
  };

  handleLoginSuccess = () => {
    this.setState({
      email: '',
      password: '',
      errorMessage: '',
      loading: false,
    });
  };

  handleLoginFail = () => {
    this.setState({
      errorMessage: 'Authentication Failed',
      loading: false,
    });
  };

  render() {
    const { email, password, errorMessage, loading } = this.state;

    return (
      <Card>
        <CardSection>
          <Input
            value={email}
            label="Email"
            placeholder="user@gmai.com"
            onChangeText={text => this.setState({ email: text })}
          />
        </CardSection>

        <CardSection>
          <Input
            value={password}
            label="Password"
            placeholder="********"
            onChangeText={text => this.setState({ password: text })}
            secureTextEntry
          />
        </CardSection>

        <Text style={styles.errorMessageStyle}>
          {errorMessage}
        </Text>

        <CardSection>
          {loading
            ? <Spinner size="small" />
            : (
              <Button onPress={this.handleLogin}>
                Log In / Sign Up
              </Button>)}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorMessageStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: COLORS.red
  }
};
