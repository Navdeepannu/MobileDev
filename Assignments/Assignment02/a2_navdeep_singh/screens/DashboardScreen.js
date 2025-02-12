import React, { useState } from "react"
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native"

import { Picker } from "@react-native-picker/picker"

import globalStyles from "../shared/globalStyles"
import { CommonActions } from "@react-navigation/native"

export default function DashboardScreen({ navigation }) {
  const [studentId, setStudentId] = useState("")
  const [name, setName] = useState("")
  const [numPeople, setNumPeople] = useState("")
  const [roomNumber, setRoomNumber] = useState("")

  // Navigate to SignInScreen
  const logout = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: "SignIn" }],
      })
    )
  }

  // Navigation to booking Screen
  const navigateToBooking = () => {
    if (
      studentId &&
      name &&
      numPeople &&
      !isNaN(numPeople) &&
      Number(numPeople) > 0 &&
      roomNumber
    ) {
      navigation.navigate("Booking", {
        roomSelected: roomNumber,
        numOfPeople: numPeople,
      })
    } else {
      alert("Please enter valid information!")
    }
  }
  return (
    <View style={styles.container}>
      <Text style={globalStyles.description}>
        Enter the details to check available Rooms
      </Text>

      <View style={globalStyles.inputView}>
        <Text style={globalStyles.label}>StudentId: </Text>
        <TextInput
          style={globalStyles.input}
          placeholder="Enter Student ID"
          onChangeText={setStudentId}
          value={studentId}
        />

        <Text style={globalStyles.label}>Name: </Text>
        <TextInput
          style={globalStyles.input}
          placeholder="Enter Name"
          onChangeText={setName}
          value={name}
        />

        <Text style={globalStyles.label}>Number of People: </Text>
        <TextInput
          style={globalStyles.input}
          placeholder="Enter Number of people"
          onChangeText={setNumPeople}
          value={numPeople}
          keyboardType="numeric"
          returnKeyType="go"
        />

        <Text style={globalStyles.label}>Select Room Number: </Text>
        <View style={globalStyles.pickerContainer}>
          <Picker
            style={globalStyles.picker}
            selectedValue={roomNumber}
            onValueChange={(itemValue) => setRoomNumber(itemValue)}
          >
            <Picker.Item label="Scroll to pick a room" value=" " />
            <Picker.Item label="A101" value="A101" />
            <Picker.Item label="A102" value="A102" />
            <Picker.Item label="A103" value="A103" />
            <Picker.Item label="A104" value="A104" />
            <Picker.Item label="A105" value="A105" />
          </Picker>
        </View>
      </View>

      <View style={globalStyles.buttonView}>
        <TouchableOpacity
          style={[globalStyles.button, { backgroundColor: "#355E3B" }]}
          onPress={navigateToBooking}
        >
          <Text style={globalStyles.buttonText}>Check Availability</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={logout} style={globalStyles.button}>
          <Text style={globalStyles.buttonText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
})
