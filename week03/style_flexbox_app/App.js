import TicTacToeScreen from "./screens/TicTacToeScreen.js"
import HomeScreen from "./screens/HomeScreen.js"
import { StyleSheet, View } from "react-native"
import globalStyle from "./shared/GlobalStyles.js"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={globalStyle.safeArea}>
        <View style={styles.container}>
          <TicTacToeScreen style={globalStyle.container} />
          {/* <HomeScreen /> */}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
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
