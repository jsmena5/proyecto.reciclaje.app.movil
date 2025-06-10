import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const UsersList = ({ route, navigation }) => {
  const { userName } = route.params || { userName: "Usuario" };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>¡Bienvenido, {userName}!</Text>
      <Button
        title="Escanear Producto"
        onPress={() => navigation.navigate("ScanScreen")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default UsersList;