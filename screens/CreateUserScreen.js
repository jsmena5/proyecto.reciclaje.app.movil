import React, { useState } from "react";
import { View, Button, TextInput, ScrollView, StyleSheet, Alert } from "react-native";
import { db } from "../database/firebase";
import { collection, addDoc } from "firebase/firestore";

const CreateUserScreen = (props) => {
  const initialState = {
    name: "",
    email: "",
    phone: "",
  };

  const [state, setState] = useState(initialState);

  const handleChangeText = (value, name) => {
    setState({ ...state, [name]: value });
  };

  const saveNewUser = async () => {
    if (state.name === "") {
      Alert.alert("Atención", "Por favor ingresa un nombre");
      return;
    }

    try {
      await addDoc(collection(db, "users"), {
        name: state.name,
        email: state.email,
        phone: state.phone,
      });
      props.navigation.navigate("UsersList", {
        userName: state.name,
      });
    } catch (error) {
      console.log("Error adding document: ", error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Nombre"
          onChangeText={(value) => handleChangeText(value, "name")}
          value={state.name}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Correo Electrónico"
          multiline
          numberOfLines={2}
          onChangeText={(value) => handleChangeText(value, "email")}
          value={state.email}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Teléfono"
          onChangeText={(value) => handleChangeText(value, "phone")}
          value={state.phone}
          keyboardType="phone-pad"
        />
      </View>
      <View style={styles.button}>
        <Button title="Guardar Usuario" onPress={saveNewUser} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  button: {
    marginTop: 20,
  },
});

export default CreateUserScreen;