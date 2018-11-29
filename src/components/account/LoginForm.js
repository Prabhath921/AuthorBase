import React, { Component } from "react";
import { connect } from "react-redux";
import { emailChanged, passwordChanged, loginUser } from "../../actions";
import { ImageBackground, TouchableOpacity, Platform } from "react-native";
import {
  Container,
  Content,
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
  View,
  Grid,
  Col,
  Row,
  StyleProvider
} from "native-base";
import { bindActionCreators } from "redux";
import Toast from "react-native-toast-native";
import getTheme from "../../theme/components";
import BaseTheme from "../../theme/variables/orangeTheme";

class LoginForm extends Component {
  componentWillMount() {}

  componentDidUpdate(prevProps) {
    if (prevProps.error !== this.props.error) {
      if (this.props.error != "") {
        Toast.show(
          this.props.error,
          Toast.SHORT,
          Toast.BOTTOM,
          styles.ToastStyles
        );
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
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  onRegisterPress() {
    this.props.navigation.navigate("Register");
  }

  renderButton() {
    if (this.props.loading) {
      return (
        <StyleProvider style={getTheme(BaseTheme)}>
          <View style={{ width: "100%", bottom: "0%" }}>
            <Spinner
              color="#FF5A12"
              style={{ width: 50, alignSelf: "center" }}
            />
          </View>
        </StyleProvider>
      );
    }
    return (
      <StyleProvider style={getTheme(BaseTheme)}>
        <Button
          full
          rounded
          onPress={this.onButtonPress.bind(this)}
          style={{ flex: 1 }}
        >
          <Text>Login</Text>
        </Button>
      </StyleProvider>
    );
  }

  render() {
    return (
      <StyleProvider style={getTheme(BaseTheme)}>
        <Container>
          <Header>
            <Text style={{ color: "white" }}>Login</Text>
          </Header>
          <ImageBackground
            source={require("../../assets/images/imgLoginBackground.jpg")}
            style={{ flex: 1, resizeMode: "cover" }}
          >
            <Content>
              <Body style={styles.loginCard}>
                <Thumbnail
                  square
                  large
                  source={require("../../assets/images/imgAppLogo.png")}
                  style={styles.appLogo}
                />
                <H3 style={styles.appLogoText}>
                  Welcome To Author Writing portal
                </H3>
                <Card style={{ backgroundColor: "transparent" }}>
                  <CardItem style={{ backgroundColor: "transparent" }}>
                    <Form
                      style={{
                        width: "100%",
                        backgroundColor: "transparent",
                      }}
                    >
                      <View style={{  padding:25}}>
                        <Item floatingLabel style={{marginBottom:15}}>
                          <Label>Email</Label>
                          <Input
                            onChangeText={this.onEmailChange.bind(this)}
                            value={this.props.email}
                          />
                        </Item>
                        <Item floatingLabel style={{Height:70}}>
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
                            fontSize: 12
                          }}
                        >
                          forget password?
                        </Label>
                        <Item style={{ padding: 15 }}>
                          {this.renderButton()}
                        </Item>
                        <View
                          style={{
                            flex: 1,
                            flexDirection: "row",
                            marginBottom: 1
                          }}
                        />

                        <Grid
                          style={{
                            width: "100%",
                            height: 40,
                            display: "flex",
                            paddingTop: 20,
                            position: "relative"
                          }}
                        >
                          <Row>
                            <Col
                              style={{
                                backgroundColor: "#635DB7",
                                height: 2,
                                width: "33.33%"
                              }}
                            />

                            <Col
                              style={{
                                height: 2,
                                width: "33.33%"
                              }}
                            >
                              <Label style={styles.Text}>or login with</Label>
                            </Col>
                            <Col
                              style={{
                                backgroundColor: "#635DB7",
                                height: 2,
                                width: "33.33%"
                              }}
                            />
                          </Row>
                        </Grid>
                      </View>
                      <View
                        style={{
                          alignContent: "center",
                          alignSelf: "center",
                          justifyContent: "center",
                          flex:1,
                          flexDirection: "row",
                          margin: 0,
                          padding:0,
                        }}
                      >
                        <TouchableOpacity
                          onPress={this.onRegisterPress.bind(this)}
                        >
                          <Thumbnail
                            style={{
                              alignSelf: "center",
                              width: 45,
                              height: 45
                            }}
                            small
                            source={require("../../assets/images/FbIcon.png")}
                          />
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={this.onRegisterPress.bind(this)}
                        >
                          <Thumbnail
                            style={{
                              alignSelf: "center",
                              width: 35,
                              height: 35,
                              marginRight: 8
                            }}
                            small
                            source={require("../../assets/images/GoogleIcon.png")}
                          />
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={this.onRegisterPress.bind(this)}
                        >
                          <Thumbnail
                            style={{
                              alignSelf: "center",
                              width: 35,
                              height: 35
                            }}
                            small
                            source={require("../../assets/images/TwitterIcon.png")}
                          />
                        </TouchableOpacity>
                      </View>
                      <View>
                        <Label
                          style={{
                            alignSelf: "center",
                            position: "relative",
                            zIndex: 500,
                            height: 40,
                            width: "95%",
                            bottom: "15%",
                            color: "#000000",
                            textAlign: "center"
                          }}
                        >
                          Don't you have an account?{" "}
                          <Label
                            onPress={this.onRegisterPress.bind(this)}
                            style={{ color: "#E2682B" }}
                          >
                            Register{" "}
                          </Label>
                          Here
                        </Label>
                      </View>
                    </Form>
                  </CardItem>
                </Card>
              </Body>
            </Content>
          </ImageBackground>
        </Container>
      </StyleProvider>
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
    marginBottom: 15,
    marginTop: 15
  },

  appLogoText: {
    color: "#FF5A12",
    marginBottom: 20
  },

  LeftLine: {
    borderBottomColor: "white",
    borderBottomWidth: 1,
    zIndex: 1,
    width: "33.5%",
    marginRight: 5
  },

  Text: {
    alignSelf: "center",
    display: "flex",
    width: 96,
    marginTop: -12,
    position: "relative",
    zIndex: 5
  },

  RightLine: {
    borderBottomColor: "white",
    borderBottomWidth: 1,
    zIndex: 10,
    width: "33.5%",
    marginLeft: 5,
    Right: 0
  },

  ToastStyles: {
    height: Platform.OS === "ios" ? 100 : 150,
    color: "red",
    fontSize: 15,
    lineHeight: 2,
    lines: 4,
    borderRadius: 35,
    yOffset: 40
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
