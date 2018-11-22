import React from "react";
import { Header } from "react-navigation";
import { View, Platform,Text } from "react-native";

const CustomHeader = props => {
  return <Header {...props} />;
};

class CustomHeadernew extends React.Component{
  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.logo, { textAlign: 'center' }]}>
          My Custom Header
        </Text>
      </View>
    );
  }
}

export default CustomHeadernew;
