import React, { useState } from "react"
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native"

import globalStyles from "../shared/globalStyles"

// Entry Point
export default function SignInScreen({ navigation }) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const navigateToDashboard = () => {
    if (
      username.trim().toLowerCase() === "admin" &&
      password.trim().toLowerCase() === "admin"
    ) {
      navigation.navigate("Dashboard")
    } else {
      alert("Invalid Username or Password!")
    }
  }

  return (
    <View style={styles.container}>
      <Text style={globalStyles.title}>Sign In to Book a Room</Text>

      <View style={globalStyles.inputView}>
        <Text>Username: </Text>
        <TextInput
          style={globalStyles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />

        <Text>Password: </Text>
        <TextInput
          style={globalStyles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={navigateToDashboard}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  button: {
    backgroundColor: "#0066b2",
    padding: 12,
    borderRadius: 15,
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
})
