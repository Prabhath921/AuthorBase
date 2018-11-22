import { StackNavigator, SwitchNavigator } from "react-navigation";
import LoginForm from "./components/LoginForm";
import StackNavigationHeader from "./components/common/StackNavigationHeader";
import SignUpForm from "./components/SignUpForm";
import { Header ,View,Text} from "native-base";

const Stack = StackNavigator(
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

export default Stack;
