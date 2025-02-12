import { StyleSheet } from "react-native"

const globalStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    color: "#333",
    marginBottom: 20,
    fontWeight: 300,
    textAlign: "center",
    paddingHorizontal: 20,
  },
  inputView: {
    width: "100%",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: "#555",
    fontWeight: "600",
    marginBottom: 7,
  },
  input: {
    height: 40,
    paddingLeft: 10,
    marginBottom: 15,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    fontSize: 16,
    color: "#333",
  },
  buttonView: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    backgroundColor: "#D2122E",
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 20,
    alignItems: "center",
    minWidth: "40%",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    backgroundColor: "#fff",
    width: "100%",
    height: 50,
    justifyContent: "center",
    overflow: "hidden",
  },
  picker: {
    width: "100%",
  },
})

export default globalStyles
