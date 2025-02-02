import { StatusBar } from "expo-status-bar"
import { useState, useEffect } from "react"
import {
  StyleSheet,
  Text,
  View,
  Linking,
  Image,
  FlatList,
  ActivityIndicator,
} from "react-native"

import { Picker } from "@react-native-picker/picker"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"

export default function App() {
  const INDUSTRY = ["hr", "dev", "business"]

  const [industry, setIndustry] = useState(INDUSTRY[0])
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  // Fetch data from API
  const getJobData = async () => {
    setIsLoading(true)

    try {
      const response = await fetch(
        `https://jobicy.com/api/v2/remote-jobs?count=20&industry=${industry}`
      )

      if (!response.ok) {
        throw new Error(`Response Status : ${response.status}`)
      }

      const jsonData = await response.json()
      setData(jsonData.jobs || [])
    } catch (error) {
      console.log(`Error fetching data: ${error}`)
    } finally {
      setIsLoading(false)
    }
  }

  // Calling the API only when the user chooses a particular INDUSTRY
  useEffect(() => {
    setTimeout(() => {
      getJobData()
    }, 1000)
  }, [industry])

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Text style={styles.title}>Job Search App</Text>
          <Text style={styles.description}>
            Select the industry you want to work in:
          </Text>

          <Text style={styles.text}>Pick the Industry:</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={industry}
              onValueChange={(itemValue) => setIndustry(itemValue)}
              style={styles.picker}
              dropdownIconColor="#333"
            >
              {INDUSTRY.map((element) => (
                <Picker.Item label={element} value={element} key={element} />
              ))}
            </Picker>
          </View>

          <View style={styles.jobsContainer}>
            <Text style={styles.sectionTitle}>Available Jobs:</Text>
            {isLoading ? (
              <ActivityIndicator color="#0000ff" size="large" />
            ) : (
              <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                  <View style={styles.jobItem}>
                    <View style={styles.companyInfoContainer}>
                      {item.companyLogo ? (
                        <Image
                          source={{ uri: item.companyLogo }}
                          style={styles.companyLogo}
                          resizeMode="contain"
                        />
                      ) : (
                        <Text style={styles.placeholderText}>No Image</Text>
                      )}
                      <Text style={styles.companyName}>{item.companyName}</Text>
                    </View>
                    <View style={styles.jobDetailsContainer}>
                      <Text style={styles.jobTitle}>{item.jobTitle}</Text>
                      <Text style={styles.salary}>
                        Minimum Salary:{" "}
                        {item.annualSalaryMin
                          ? `${item.annualSalaryMin}`
                          : `Not Disclosed`}{" "}
                        {item.salaryCurrency}
                      </Text>
                      <Text
                        style={styles.jobLink}
                        onPress={() => Linking.openURL(item.url)}
                      >
                        Apply here
                      </Text>
                    </View>
                  </View>
                )}
              />
            )}
          </View>

          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  container: {
    width: "100%",
    maxWidth: 400,
    alignItems: "center",
    padding: 20,
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
  text: {
    fontSize: 25,
    color: "#333",
    fontWeight: "500",
    marginBottom: 5,
  },
  pickerContainer: {
    width: "80%",
    height: 100,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  picker: {
    width: "90%",
  },

  jobsContainer: {
    flex: 1,
    width: "100%",
    marginTop: 15,
  },
  sectionTitle: {
    fontSize: 20,
    color: "#0047AB",
    fontWeight: "500",
    marginTop: 15,
    marginBottom: 10,
  },
  companyLogo: {
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 10,
  },
  companyInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  companyName: {
    fontSize: 20,
    color: "#444",
    paddingVertical: 5,
  },
  loadingText: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginTop: 20,
  },

  jobItem: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    marginBottom: 10,
  },
  jobDetailsContainer: {
    marginLeft: 10,
    marginTop: 5,
  },
  placeholderText: {
    fontSize: 14,
    color: "#999",
    fontStyle: "italic",
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: "500",
    color: "#333",
  },
  salary: {
    fontSize: 20,
    fontWeight: "200",
  },
  jobLink: {
    fontSize: 17,
    color: "#0066cc",
    fontStyle: "italic",
    textDecorationLine: "underline",
    marginTop: 4,
  },
})
