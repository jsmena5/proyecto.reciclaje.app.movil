import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

// Components
import CreateUserScreen from "./screens/CreateUserScreen";
import UserDetailScreen from "./screens/UserDetailScreen";
import UsersList from "./screens/UsersList";
import ScanScreen from './screens/ScanScreen';


function MyStack(){
  return(
    <Stack.Navigator initialRouteName="CreateUserScreen">
        <Stack.Screen name="CreateUserScreen" component={CreateUserScreen} options={{ title: 'Crear Usuario' }} />
        <Stack.Screen name="UsersList" component={UsersList} options={{ title: 'Lista de Usuarios' }} />
        <Stack.Screen name="ScanScreen" component={ScanScreen} options={{ title: 'Escanear Producto' }} />
      </Stack.Navigator>
  )
}


export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
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
