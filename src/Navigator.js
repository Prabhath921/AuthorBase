import { StackNavigator, SwitchNavigator } from 'react-navigation';
import LoginForm from './components/LoginForm';
import TestPage from './components/TestPage';
import SignUpForm from './components/SignUpForm'

const Stack = StackNavigator({
    Login: {
     screen: LoginForm
    },
    Register: {
      screen: SignUpForm
    }
  });

export default Stack;