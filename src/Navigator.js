import { StackNavigator, SwitchNavigator } from 'react-navigation';
import LoginForm from './components/LoginForm';
import TestPage from './components/TestPage';

const Stack = SwitchNavigator({
    Login: {
     screen: LoginForm
    },
    Main: {
      screen: TestPage
    }
  });

  export default Stack;