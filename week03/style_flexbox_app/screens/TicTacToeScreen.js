import React, { useState } from "react"
import { StyleSheet, Alert, Text, View } from "react-native"
import globalStyle from "../shared/GlobalStyles"

const TicTacToeScreen = () => {
  // Initialize the board as a 3x3 2D array
  const [board, setBoard] = useState([
    // 3 rows, 3 columns
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ])

  const [isXNext, setIsXNext] = useState(true)
  const [score, setScore] = useState({ X: 0, O: 0 })
  const [gameOver, setGameOver] = useState(false)

  const checkWinner = (board) => {
    // Check rows and columns
    for (let i = 0; i < 3; i++) {
      // Check rows
      if (
        board[i][0] &&
        board[i][0] === board[i][1] &&
        board[i][1] === board[i][2]
      ) {
        return board[i][0]
      }
      // Check columns
      if (
        board[0][i] &&
        board[0][i] === board[1][i] &&
        board[1][i] === board[2][i]
      ) {
        return board[0][i]
      }
    }
    // Check diagonals
    if (
      board[0][0] &&
      board[0][0] === board[1][1] &&
      board[1][1] === board[2][2]
    ) {
      return board[0][0]
    }
    if (
      board[0][2] &&
      board[0][2] === board[1][1] &&
      board[1][1] === board[2][0]
    ) {
      return board[0][2]
    }
    // Check for draw
    const isDraw = board.every((row) => row.every((cell) => cell !== null))
    return isDraw ? "Draw" : null
  }

  const handleCellPress = (row, col) => {
    if (board[row][col] || gameOver) return

    const newBoard = board.map((r, i) =>
      r.map((cell, j) =>
        i === row && j === col ? (isXNext ? "X" : "O") : cell
      )
    )

    setBoard(newBoard)
    setIsXNext(!isXNext)

    const winner = checkWinner(newBoard)
    if (winner) {
      setGameOver(true)
      if (winner !== "Draw") {
        setScore((prev) => ({ ...prev, [winner]: prev[winner] + 1 }))
        Alert.alert("Game Over", `${winner} Wins!`)
      } else {
        Alert.alert("Game Over", "It's a Draw!")
      }
    }
  }

  const resetGame = () => {
    setBoard([
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ])
    setIsXNext(true)
    setGameOver(false)
  }

  return (
    <View style={globalStyle.container}>
      <Text style={globalStyle.headerStyle}>Tic Tac Toe</Text>
      <View style={[globalStyle.scoreBoard, globalStyle.textStyle]}>
        <Text style={globalStyle.textStyle}>X: {score.X}</Text>
        <Text style={globalStyle.textStyle}>O: {score.O}</Text>
      </View>
      <View style={globalStyle.board}>
        {board.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <Text key={`${rowIndex}-${colIndex}`} style={globalStyle.cell}>
              {cell}
            </Text>
          ))
        )}
      </View>
      <Text>Reset Game</Text>
    </View>
  )
}

export default TicTacToeScreen

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#eee",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   headerStyle: {
//     width: "100%",
//     padding: 10,
//     color: "deepskyblue",
//     fontSize: 30,
//     fontWeight: "bold",
//     textAlign: "center",
//   },
//   cell: {
//     width: 100,
//     height: 100,
//     margin: 10,
//     justifyContent: "center",
//     alignItems: "center",
//     borderWidth: 2,
//     borderColor: "slateblue",
//     backgroundColor: "salmon",
//   },
// })
