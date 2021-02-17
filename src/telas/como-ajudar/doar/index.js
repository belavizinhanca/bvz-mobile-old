import React from "react";
import { Text, SafeAreaView, TouchableOpacity } from "react-native";

const Doar = ({ navigation }) => {
    return (
      <SafeAreaView style={{flex:1}}>
      <TouchableOpacity onPress={ () =>
          navigation.navigate('Home')
        }>
          <Text>Voltar para Home</Text>
      </TouchableOpacity>
      <Text>Aqui é a página de Doações </Text>
      </SafeAreaView>
    );
  };
  
  export default Doar;