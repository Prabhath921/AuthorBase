import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import firebase from "firebase";
import ReduxThunk from "redux-thunk";
import reducers from "./reducers";
import Router from "./Router";
import StackNav from "./Navigator";
import { config } from "./FirebaseConfig";
import { Root } from "native-base";

import SplashScreen from "react-native-splash-screen";

class App extends Component {
  componentWillMount() {
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
 }

  componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.hide();
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Root>
        <Provider store={store}>
          <StackNav />
        </Provider>
      </Root>
    );
  }
}

export default App;
