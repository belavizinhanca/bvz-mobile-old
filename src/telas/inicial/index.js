import React from "react";
import { Button, Text, SafeAreaView, TouchableOpacity } from "react-native";

const Home = ({ navigation }) => {
    return (
      <SafeAreaView style={{flex:1}}>
      <TouchableOpacity onPress={ () =>
          navigation.navigate('Sobre')
        }>
          <Text>Aqui</Text>
      </TouchableOpacity>
      </SafeAreaView>
    );
  };
  
  export default Home;