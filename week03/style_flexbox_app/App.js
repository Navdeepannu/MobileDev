import TicTacToeScreen from "./screens/TicTacToeScreen.js"
import HomeScreen from "./screens/HomeScreen.js"
import { StyleSheet, View } from "react-native"
import globalStyle from "./shared/GlobalStyles.js"

// npm install react-native-safe-area-context

export default function App() {
  return (
    <View style={styles.container}>
      <TicTacToeScreen style={globalStyle.container} />
      {/* <HomeScreen /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
  },
})
