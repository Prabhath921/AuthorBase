import React, { Component } from "react";
import { connect } from "react-redux";
import { emailChanged, passwordChanged, loginUser } from "../../actions";
import { ImageBackground, Platform } from "react-native";
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
  DatePicker,
  Content
} from "native-base";
import { bindActionCreators } from "redux";
import Toast from "react-native-toast-native";

const Today = new Date();
class LoginForm extends Component {
  componentWillMount() {}

  componentDidUpdate(prevProps) {
    if (prevProps.error !== this.props.error) {
      if (this.props.error != "") {
        Toast.show(
          this.props.error,
          Toast.SHORT,
          Toast.TOP,
          styles.ToastStyles
        );
      }
    }
  }

  onSignUpEmailChange(text) {
    this.props.emailChanged(text);
  }

  onSignUpPasswordChange(text) {
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
          source={require("../../assets/images/imgLoginBackground.jpg")}
          style={{ flex: 1, resizeMode: "cover" }}
        >
          <Content>
            <Body style={styles.loginCard}>
              <Card
                style={{
                  backgroundColor: "transparent",
                  alignContent: "center"
                }}
              >
                <H3 style={styles.appLogoText}>
                  Welcome To Author Writing portal
                </H3>
                <CardItem style={{ backgroundColor: "transparent" }}>
                  <Form
                    style={{ width: "100%", backgroundColor: "transparent" }}
                  >
                    <Item floatingLabel>
                      <Label>First Name</Label>
                      <Input
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                      />
                    </Item>
                    <Item floatingLabel>
                      <Label>Middle Name</Label>
                      <Input
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                      />
                    </Item>
                    <Item floatingLabel>
                      <Label>Last Name</Label>
                      <Input
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                      />
                    </Item>
                    <Item floatingLabel>
                      <Label>Email</Label>
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
                    <Item>
                      <Label>Birth Date</Label>
                      <DatePicker
                        defaultDate={new Date(1992, 11, 15)}
                        maximumDate={new Date()}
                        locale={"en"}
                        timeZoneOffsetInMinutes={undefined}
                        modalTransparent={false}
                        animationType={"fade"}
                        androidMode={"default"}
                        onDateChange={this.setDate}
                      />
                    </Item>
                    <Item last style={{ padding: 15 }}>
                      {this.renderButton()}
                    </Item>
                  </Form>
                </CardItem>
              </Card>
            </Body>
          </Content>
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

  appLogoText: {
    color: "orange",
    marginTop: 20,
    marginBottom: -15,
    alignSelf: "center",
    fontSize: 25,
    display: "flex"
  },

  ToastStyles: {
    height: Platform.OS === "ios" ? 50 : 100,
    color: "red",
    fontSize: 15,
    lineHeight: 2,
    lines: 4,
    borderRadius: 15,
    fontWeight: "bold",
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
