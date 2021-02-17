import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet } from "react-native";

const Sobre = ({ navigation }) => {
    return (
      <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={ () =>
          navigation.navigate('Home')
        }>
          <Text>Pagina Quem Somos 3</Text>
      </TouchableOpacity>
      </SafeAreaView>
    );
  };
  
  export default Sobre;

  const styles = StyleSheet.create({
    container: {
      flex: 10
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });