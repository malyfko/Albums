import React, { Component } from 'react';
import { Text } from 'react-native';

import { Card, CardSection, Button, Input, Spinner } from 'components/common';
import { COLORS } from 'consts/index';

export class LoginForm extends Component {
  handleLogin = () => {
    const { email, password, loginUser } = this.props;

    loginUser({ email, password });
  };

  handleEmailChange = (text) => {
    this.props.changeEmail(text);
  };

  handlePasswordChange = (text) => {
    this.props.changePassword(text);
  };

  render() {
    const { email, password, errorMessage, loading } = this.props;

    return (
      <Card>
        <CardSection>
          <Input
            value={email}
            label="Email"
            placeholder="user@gmai.com"
            onChangeText={this.handleEmailChange}
            editable={!loading}
          />
        </CardSection>

        <CardSection>
          <Input
            value={password}
            label="Password"
            placeholder="********"
            onChangeText={this.handlePasswordChange}
            editable={!loading}
            secureTextEntry
          />
        </CardSection>

        {!!errorMessage && (
          <Text style={styles.errorMessageStyle}>
            {errorMessage}
          </Text>
        )}

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
