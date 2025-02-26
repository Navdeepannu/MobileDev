import { StyleSheet } from "react-native"

const globalStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    width: "100%",
    backgroundColor: "#eee",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 50,
  },
  label: {
    fontSize: 20,
    fontWeight: 300,
    color: "#333",
    marginBottom: 15,
  },
  textInput: {
    width: "90%",
    height: 100,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#FFF",
    textAlignVertical: "top",
  },
  gridItem: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f0f0f0",
  },
})

export default globalStyles
