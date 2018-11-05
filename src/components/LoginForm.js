import React, { Component } from "react";
import { connect } from "react-redux";
import { emailChanged, passwordChanged, loginUser } from "../actions";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Form,
  Button,
  Input,
  Spinner,
  Item,
  Label,
  Body
} from "native-base";
import { bindActionCreators } from "redux";

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    //this.props.navigation.navigate("Main");
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner color="green" />;
    }
    return (
      <Button
        full
        rounded
        onPress={this.onButtonPress.bind(this)}
        style={{ flex: 1 }}
      >
        <Text>Login</Text>
      </Button>
    );
  }

  render() {
    return (
      <Container>
        <Header />

        <Body style={styles.loginCard}>
          <Card style={{ backgroundColor: "transparent" }}>
            <CardItem style={{ backgroundColor: "transparent" }}>
              <Form style={{ width: "100%", backgroundColor: "transparent" }}>
                <Item floatingLabel>
                  <Label>Username</Label>
                  <Input
                    onChangeText={this.onEmailChange.bind(this)}
                    value={this.props.email}
                  />
                </Item>
                <Item floatingLabel>
                  <Label>Password</Label>
                  <Input
                    secureTextEntry
                    onChangeText={this.onPasswordChange.bind(this)}
                    value={this.props.password}
                  />
                  <Input />
                </Item>
                <Item last style={{ padding: 15 }}>
                  {this.renderButton()}
                </Item>
                <Text style={styles.errorTextStyle}>{this.props.error}</Text>
              </Form>
            </CardItem>
          </Card>
        </Body>
      </Container>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: "center",
    flex: 1,
    padding: 10
  },

  loginCard: {
    flexGrow: 1,
    alignContent: "center",
    alignItem: "center",
    justifyContent: "center"
  }
};

const mapStateToProps = state => {
  const { email, password, error, loading } = state.auth;
  return { email, password, error, loading };
};

const mapDispatchToProps = dispatch => {
  return {
    emailChanged: bindActionCreators(emailChanged, dispatch),
    passwordChanged: bindActionCreators(passwordChanged, dispatch),
    loginUser: bindActionCreators(loginUser, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
