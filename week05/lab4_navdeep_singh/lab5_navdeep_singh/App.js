import QuantityScreen from "./screens/Quantity"
import BillScreen from "./screens/BillScreen"
import PriceScreen from "./screens/PriceScreen"

import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Quantity" component={QuantityScreen} />
        <Stack.Screen name="Price" component={PriceScreen} />
        <Stack.Screen name="Bill" component={BillScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

