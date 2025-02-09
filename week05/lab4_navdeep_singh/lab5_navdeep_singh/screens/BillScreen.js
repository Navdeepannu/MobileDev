import React from "react"
import { View, Text } from "react-native"
import { globalStyle } from "../shared/globalStyles"

import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context"

const BillScreen = ({ route }) => {
  const { price } = route.params
  const finalBill = price * 1.13
  return (
    <SafeAreaProvider>
      <SafeAreaView style={globalStyle.safeContainer}>
        <View>
          <Text style={globalStyle.text}>Total Price: ${price.toFixed(2)}</Text>
          <Text style={globalStyle.text}>
            Final Bill (incl. 13% tax) : ${finalBill.toFixed(2)}
          </Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default BillScreen
