import React from "react";
import { Button, Text, SafeAreaView, TouchableOpacity } from "react-native";

const Contato = ({ navigation }) => {
    return (
      <SafeAreaView style={{flex:1}}>
      <TouchableOpacity onPress={ () =>
          navigation.navigate('Home')
        }>
          <Text>Voltar para Home</Text>
      </TouchableOpacity>
      <Text>Aqui é a página de Contato </Text>
      </SafeAreaView>
    );
  };
  
  export default Contato;