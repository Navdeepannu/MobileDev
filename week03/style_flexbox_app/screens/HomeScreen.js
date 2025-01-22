import { StyleSheet, Text, View } from "react-native"
import globalStyle from "../shared/GlobalStyles"

const HomeScreen = () => {
  return (
    <View style={globalStyle.container}>
      <Text style={[globalStyle.headerStyle, styles.title, { color: "red" }]}>
        Home Page
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontStyle: "italic",
    color: "green",
  },
})

export default HomeScreen
