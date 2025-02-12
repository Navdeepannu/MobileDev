import { StatusBar } from "expo-status-bar"
import { useState } from "react"
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Keyboard,
} from "react-native"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"

export default function App() {
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [bmi, setBmi] = useState(0)
  const [bmiRange, setBmiRange] = useState("")

  const calculate = () => {
    // input validation
    if (!weight || !height || weight <= 0 || height <= 0 || height >= 3) {
      Alert.alert("Invalid Input", "Please enter a valid height and weight!")
      return
    }

    // calculate and set bmi value
    const bmiValue = weight / (height * height)
    setBmi(bmiValue.toFixed(2))

    // set BmiRange category
    if (bmiValue < 18.5) {
      setBmiRange("Underweight")
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      setBmiRange("Normal weight")
    } else if (bmiValue >= 25.0 && bmiValue <= 29.9) {
      setBmiRange("Overweight")
    } else if (bmiValue >= 30.0) {
      setBmiRange("Obese")
    } else {
      setBmiRange("No Value")
    }

    Keyboard.dismiss()
  }

  // Reset Function
  const reset = () => {
    setWeight(0)
    setHeight(0)
    setBmi(null)
    setBmiRange("")
  }

  // Extra function to add different colors in result.
  const bmiRangeColors = () => {
    if (
      bmiRange === "Underweight" ||
      bmiRange === "Overweight" ||
      bmiRange === "Obese"
    ) {
      return "#ff0505"
    } else if (bmiRange === "Normal weight") {
      return "green"
    } else {
      return "#333"
    }
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Text style={styles.title}>BMI CALCULATOR</Text>

          {/* Inputs- height(m), weight(kg) */}
          <View style={styles.inputView}>
            <View style={styles.block}>
              <Text style={styles.text}>Weight (kg)</Text>
              <TextInput
                style={styles.inputBox}
                placeholder="e.g. 75 Kg"
                keyboardType="decimal-pad"
                value={weight}
                onChangeText={setWeight}
                returnKeyType="done"
              />
            </View>

            <View style={styles.block}>
              <Text style={styles.text}>Height(m) </Text>

              <TextInput
                style={styles.inputBox}
                value={height}
                placeholder="e.g. 1.75m"
                keyboardType="numeric"
                onChangeText={setHeight}
                returnKeyType="done"
              />
            </View>
          </View>

          {/* calculate and reset buttons */}
          <View style={styles.buttonView}>
            <TouchableOpacity style={styles.button} onPress={calculate}>
              <Text style={styles.buttonText}>Calculate</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={reset}
              style={[styles.button, { backgroundColor: "#FF6B6B" }]}
            >
              <Text style={styles.buttonText}>Reset</Text>
            </TouchableOpacity>
          </View>

          {/* Result display: Conditional rendereing */}
          {bmi && (
            <Text style={styles.result}>
              Your BMI is : <Text style={styles.bmiResult}>{bmi} Kg/m²</Text>
            </Text>
          )}

          {bmiRange && (
            <Text style={styles.result}>
              Your are :{" "}
              <Text style={[styles.bmiResult, { color: bmiRangeColors() }]}>
                {bmiRange}
              </Text>
            </Text>
          )}
          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#2D87FF",
    marginBottom: 20,
  },
  text: {
    color: "#333",
    fontSize: 18,
    fontWeight: "600",
    marginRight: 10,
  },
  inputBox: {
    flex: 1,
    padding: 10,
    marginBottom: 10,
    height: 45,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: "#ccc",
    color: "#333",
    fontSize: 16,
  },
  inputView: {
    width: "100%",
    marginVertical: 20,
    gap: 15,
  },
  block: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  buttonView: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  button: {
    backgroundColor: "#2D87FF",
    padding: 20,
    borderRadius: 50,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  result: {
    color: "#333",
    fontSize: 20,
    marginTop: 20,
  },
  bmiResult: {
    color: "green",
    fontStyle: "italic",
    fontWeight: "bold",
  },
})
