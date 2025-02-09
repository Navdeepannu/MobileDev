import { StyleSheet } from "react-native"

export const globalStyle = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  text: {
    fontSize: 18,
    color: "#333",
    textAlign: "center",
    marginVertical: 10,
  },
  quantityText: {
    color: "#ff1111",
    fontSize: 17,
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  input: {
    width: 350,
    borderWidth: 1,
    borderColor: "#000",
    padding: 12,
    borderRadius: 6,
    backgroundColor: "#f9f9f9",
    fontSize: 16,
    marginVertical: 10,
  },
  description: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginBottom: 10,
  },
})
