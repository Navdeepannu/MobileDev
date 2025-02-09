import { View, TouchableOpacity, Text } from "react-native"
import { globalStyle } from "../shared/globalStyles"

import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context"

const PriceScreen = ({ route, navigation }) => {
  const { quantity } = route.params
  const price = quantity * 5

  return (
    <SafeAreaProvider>
      <SafeAreaView style={globalStyle.safeContainer}>
        <View>
          <Text style={globalStyle.description}>
            Here is a summary of your order.
          </Text>
          <Text style={globalStyle.description}>
            {" "}
            You have selected{" "}
            <Text style={globalStyle.quantityText}>{quantity}</Text> items, and
            each item costs $5.
          </Text>
          <Text style={globalStyle.text}>Price: ${price.toFixed(2)}</Text>

          <TouchableOpacity
            style={globalStyle.button}
            onPress={() => navigation.navigate("Bill", { price })}
          >
            <Text style={globalStyle.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default PriceScreen
