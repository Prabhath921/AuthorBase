import React, { Component } from "react";
import { connect } from "react-redux";
import firebase from "firebase";
import { View, Button,Text} from "native-base";
import NavigationService from "../../navigators/NavigationService";

class Main extends Component {
  onLogoutPress() {
    //alert(firebase);
    firebase.auth().signOut().then(()=>{NavigationService.navigate("Login");});
  }

  render() {
    return (
      <View style={{ justifyContent: "center", flex: 1 }}>
        <Button
          full
          rounded
          onPress={this.onLogoutPress.bind(this)}
          style={{ flex: 1, alignSelf: "center" }}
        >
          <Text>signOut</Text>
        </Button>
      </View>
    );
  }
}

export default Main