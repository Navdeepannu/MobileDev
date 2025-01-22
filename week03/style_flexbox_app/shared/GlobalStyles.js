import { StyleSheet } from "react-native"

const globalStyle = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  headerStyle: {
    width: "100%",
    padding: 20,
    color: "deepskyblue",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#333",
    borderRadius: 50,
  },
  board: {
    flexDirection: "row",
    borderColor: "grey",
    borderWidth: 2,
    backgroundColor: "#333",
    borderRadius: 30,
    width: "80%",
    height: "auto",
    flexWrap: "wrap",
    padding: 10,
    justifyContent: "flex-start",
  },
  cell: {
    width: 80,
    height: 80,
    backgroundColor: "#6495ed",
    borderColor: "#6495ed",
    margin: 5,
    borderWidth: 1,
    borderRadius: 50,
  },
  cellText: {},

  scoreBoard: {
    backgroundColor: "grey",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "2%",
    margin: "1%",
    marginVertical: "5%",
  },
  textStyle: {
    fontSize: 35,
    fontWeight: "bold",
  },
  button: {
    marginTop: 20,
    alignItems: "center",
    backgroundColor: "#333",
    color: "white",
    borderRadius: "25%",
    padding: 20,
  },
  text: {
    color: "white",
    fontSize: 15
  },
})

export default globalStyle
