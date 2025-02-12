import React from "react"
import { View, Text, StyleSheet } from "react-native"

export default function BookingScreen({ route }) {
  const { roomSelected, numOfPeople } = route.params

  const rooms = [
    { roomNumber: "A101", capacity: 5, available: true },
    { roomNumber: "A102", capacity: 10, available: false },
    { roomNumber: "A103", capacity: 8, available: false },
    { roomNumber: "A104", capacity: 10, available: true },
    { roomNumber: "A105", capacity: 7, available: true },
  ]

  // Find the selected room
  const selectedRoom = rooms.find((room) => room.roomNumber === roomSelected)

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Booking Screen</Text>
      <Text style={styles.details}>Room Selected: {roomSelected}</Text>
      <Text style={styles.details}>Number of People: {numOfPeople}</Text>
      <Text style={styles.header}>Availability Status:</Text>

      {selectedRoom ? (
        selectedRoom.available && numOfPeople <= selectedRoom.capacity ? (
          <Text style={styles.roomText}>Room {roomSelected} is available.</Text>
        ) : (
          <Text style={styles.error}>
            Room {roomSelected} is not available.
          </Text>
        )
      ) : (
        <Text style={styles.error}>Room not found.</Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  details: {
    fontSize: 16,
    marginVertical: 5,
  },
  roomText: {
    fontSize: 16,
    color: "green",
    marginVertical: 3,
  },
  error: {
    color: "red",
  },
})
