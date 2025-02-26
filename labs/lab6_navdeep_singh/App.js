import globalStyles from "./shared/globalStyles"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import ProgressComponent from "./screens/Progress"

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={globalStyles.safeArea}>
        <ProgressComponent />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}
