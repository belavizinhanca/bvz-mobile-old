import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './src/telas/inicial';
import Sobre from './src/telas/sobre';
import Contato from './src/telas/contato';
import Login from './src/telas/login';
import Doar from './src/telas/como-ajudar/doar';
import Mediador from './src/telas/como-ajudar/mediador';



const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        
        <Drawer.Screen name="Home" component={Home} options={{ title: 'Home' }} />
        <Drawer.Screen name="Sobre" component={Sobre} options={{ title: 'Sobre' }} />
        <Drawer.Screen name="Mediador" component={Mediador} options={{ title: 'Mediador' }} />
        <Drawer.Screen name="Doar" component={Doar} options={{ title: 'Doar' }} />
        <Drawer.Screen name="Contato" component={Contato} options={{ title: 'Contato' }} />
        <Drawer.Screen name="Login" component={Login} options={{ title: 'Login' }} />


      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
