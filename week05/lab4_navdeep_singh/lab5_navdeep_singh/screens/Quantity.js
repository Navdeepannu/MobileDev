import React, { useState } from "react"
import { View, Text, TextInput, TouchableOpacity } from "react-native"
import { globalStyle } from "../shared/globalStyles"
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context"

const QuantityScreen = ({ navigation }) => {
  const [quantity, setQuantity] = useState("")
  const handleNext = () => {
    const qty = parseInt(quantity)
    if (!isNaN(qty) && qty > 0) {
      navigation.navigate("Price", { quantity: qty })
    } else {
      alert("Please enter a valid quantity!")
    }
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView style={globalStyle.safeContainer}>
        <View>
          <Text style={globalStyle.text}>Enter Quantity:</Text>
          <Text style={globalStyle.description}>
            Please Enter the number of item to buy - each item is worth $5
          </Text>
          <TextInput
            keyboardType="numeric"
            value={quantity}
            onChangeText={setQuantity}
            style={globalStyle.input}
          />
          <TouchableOpacity onPress={handleNext} style={globalStyle.button}>
            <Text style={globalStyle.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default QuantityScreen
