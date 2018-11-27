import { StackNavigator} from "react-navigation";
import LoginForm from "../components/account/LoginForm";
import SignUpForm from "../components/account/SignUpForm";

const loginNavigator = StackNavigator(
  {
    Login: {
      screen: LoginForm
    },
    Register: {
      screen: SignUpForm
    }
  },
  {
    initialRouteName: "Login",
    navigationOptions: {
      /* Your custom header */
      header: null,
      headerStyle: {
        backgroundColor: "transparent"
      },
      headerTitleStyle: {
        fontWeight: "bold",
        color: "#fff"
      },
      headerTintColor: "#fff",
      animationEnabled: true
    }
  }
);

export default loginNavigator;
