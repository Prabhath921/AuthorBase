import React, { Component } from "react";
import { connect } from "react-redux";
import { emailChanged, passwordChanged, loginUser } from "../actions";
import { ImageBackground } from "react-native";
import {
  Container,
  Header,
  Card,
  CardItem,
  Text,
  Form,
  Button,
  Input,
  Spinner,
  Item,
  Label,
  Body,
  Thumbnail,
  H3,
  Toast
} from "native-base";
import { bindActionCreators } from "redux";
import firebase from "firebase";

class LoginForm extends Component {
  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
      }
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.error !== this.props.error) {
      if (this.props.error != " ") {
        Toast.show({
          text: this.props.error,
          type: "danger",
          duration: 3000
        });
      }
    }
  }

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
      return (
        <Spinner
          color="orange"
          style={{ position: "relative", top: "-50%", left: "190%" }}
        />
      );
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
        <ImageBackground
          source={require("../assets/images/imgLoginBackground.jpg")}
          style={{ flex: 1, resizeMode: "cover" }}
        >
          <Body style={styles.loginCard}>
            <Thumbnail
              square
              large
              source={require("../assets/images/imgAppLogo.png")}
              style={styles.appLogo}
            />
            <H3 style={styles.appLogoText}>Welcome To Author Writing portal</H3>
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
                  </Item>
                  <Item last style={{ padding: 15 }}>
                    {this.renderButton()}
                  </Item>
                </Form>
              </CardItem>
            </Card>
          </Body>
        </ImageBackground>
      </Container>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: "center",
    color: "red"
  },

  loginCard: {
    flexGrow: 1,
    alignContent: "center",
    alignItem: "center",
    justifyContent: "center"
  },

  appLogo: {
    width: 85,
    height: 95,
    alignSelf: "center",
    marginBottom: 25
  },

  appLogoText: {
    color: "orange",
    marginBottom: 20
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
