import React from "react";
import { Text, SafeAreaView, TouchableOpacity } from "react-native";

const Mediador = ({ navigation }) => {
    return (
      <SafeAreaView style={{flex:1}}>
      <TouchableOpacity onPress={ () =>
          navigation.navigate('Home')
        }>
          <Text>Voltar para Home</Text>
      </TouchableOpacity>
      <Text>Aqui é a página de Mediador </Text>
      </SafeAreaView>
    );
  };
  
  export default Mediador;