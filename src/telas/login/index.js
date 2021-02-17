import React from "react";
import { Text, SafeAreaView, TouchableOpacity } from "react-native";

const Login = ({ navigation }) => {
    return (
      <SafeAreaView style={{flex:1}}>
      <TouchableOpacity onPress={ () =>
          navigation.navigate('Home')
        }>
          <Text>Voltar para Home</Text>
      </TouchableOpacity>
      <Text>Aqui é a página de Login </Text>
      </SafeAreaView>
    );
  };
  
  export default Login;