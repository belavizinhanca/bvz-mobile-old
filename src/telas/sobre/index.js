import React from "react";
import { Button, Text, SafeAreaView, TouchableOpacity } from "react-native";

const Sobre = ({ navigation }) => {
    return (
      <SafeAreaView style={{flex:1}}>
      <TouchableOpacity onPress={ () =>
          navigation.navigate('Home')
        }>
          <Text>Aqui</Text>
      </TouchableOpacity>
      </SafeAreaView>
    );
  };
  
  export default Sobre;