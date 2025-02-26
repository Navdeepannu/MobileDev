import { View, Text, TextInput, FlatList } from "react-native"
import globalStyles from "../shared/globalStyles"

import * as Progress from "react-native-progress"
import { useState } from "react"

const ProgressComponent = () => {
  const [value, setValue] = useState("")
  const [progress, setProgress] = useState(0)

  const handleProgressChange = (text) => {
    const maxLength = 100
    const newProgress = text.length / maxLength

    setProgress(newProgress)
    setValue(text)
  }

  const progressItems = [
    {
      key: "Pie",
      component: (
        <Progress.Pie
          progress={progress}
          size={70}
          unfilledColor="lightblue"
          color="blue"
          thickness={7}
        />
      ),
    },
    {
      key: "Bar",
      component: (
        <Progress.Bar progress={progress} width={200} height={10} color="red" />
      ),
    },
  ]
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Progress page</Text>

      <FlatList
        data={progressItems}
        numColumns={2}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <View style={globalStyles.gridItem}>
            <Text style={globalStyles.label}>{item.key}</Text>
            {item.component}
          </View>
        )}
      />

      <Text style={globalStyles.label}>Write something in the input box.</Text>
      <TextInput
        editable
        multiline
        numberOfLines={5}
        maxLength={100}
        onChangeText={handleProgressChange}
        value={value}
        style={globalStyles.textInput}
      />
    </View>
  )
}

export default ProgressComponent
