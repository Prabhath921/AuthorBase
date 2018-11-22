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
  Toast,
  View
} from "native-base";
import { bindActionCreators } from "redux";
import firebase from "firebase";
import NavigationService from '../NavigationService';


class LoginForm extends Component {
  componentWillMount() {
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
    //this.props.navigation.navigate("Register");
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  onRegisterPress() {
    this.props.navigation.navigate("Register");
  }

  renderButton() {
    if (this.props.loading) {
      return (
        <View style={{ width: "100%", bottom: "0%" }}>
          <Spinner color="orange" style={{ width: 50, alignSelf: "center" }} />
        </View>
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
                  <Label
                    style={{
                      alignSelf: "flex-end",
                      color: "gray",
                      fontSize: 12
                    }}
                  >
                    forget password?
                  </Label>
                  <Item style={{ padding: 15 }}>{this.renderButton()}</Item>
                  <View style={{ flex: 1, flexDirection: "row" }}>
                    <View style={styles.LeftLine} />
                    <Label style={styles.Text}>or login with</Label>
                    <View style={styles.RightLine} />
                  </View>
                  <Label style={{ alignSelf: "center" }}>
                    Don't you have an account?{" "}
                    <Label
                      onPress={this.onRegisterPress.bind(this)}
                      style={{ color: "#3F51B5" }}
                    >
                      Register{" "}
                    </Label>
                    Here
                  </Label>
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
    marginBottom: 15
  },

  appLogoText: {
    color: "orange",
    marginBottom: 20
  },

  LeftLine: {
    alignSelf: "flex-start",
    borderBottomColor: "white",
    borderBottomWidth: 1,
    zIndex: 1,
    width: "33.5%",
    marginRight: 5
  },

  Text: {
    alignSelf: "center",
    width: 96,
    paddingBottom: 5,
    position: "relative",
    zIndex: 5
  },

  RightLine: {
    alignSelf: "flex-end",
    borderBottomColor: "white",
    borderBottomWidth: 1,
    zIndex: 1,
    width: "33.5%",
    marginLeft: 5
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
