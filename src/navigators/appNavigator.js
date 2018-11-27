import { SwitchNavigator } from "react-navigation";
import loginNavigator from "./loginNavigator";
import Main from "../components/dashboard/Main";

const appNavigator = SwitchNavigator(
  {
    Login:loginNavigator,
    Dashboard: {
      screen: Main
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

export default appNavigator;
