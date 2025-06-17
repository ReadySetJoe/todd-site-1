import "./App.css";

// Primitives
// 1
// 'test'
// true

// Objects
// const obj = {
//   'key': 'value',
//   'some': 'thing',
//   'anotherThing': 4,
//   'interesting': {
//     'weird': 'stuff'
//   }
// }

// obj.some --> thing
// obj.anotherThing --> 4
// obj.interesting.weird --> stuff

// []
// const arr = ['thing1', 'thing2', 3, true, box]

// arr.length --> 5
// arr[3] --> true

// columns
// [
//   [box, box2, box, box2],
//   [box, box2, box, box2],
//   [box, box2, box, box2],
// ];

// const box = (
//   <div style={{ height: 50, width: 50, backgroundColor: "white" }}></div>
// );

// const box2 = (
//   <div style={{ height: 50, width: 50, backgroundColor: "black" }}></div>
// );

function makeBox(color, piece = null) {
  return (
    <div
      className="hover-enlarge"
      style={{
        height: 50,
        width: 50,
        backgroundColor: color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "24px",
        cursor: piece ? "pointer" : "default",
        color: piece ? "black" : "transparent", // Hide piece if none
      }}
    >
      {piece}
    </div>
  );
}

function getChessPiece(row, col) {
  // Define the starting positions for chess pieces
  const pieces = {
    // White pieces (bottom rows)
    "7,0": "♖",
    "7,1": "♘",
    "7,2": "♗",
    "7,3": "♕",
    "7,4": "♔",
    "7,5": "♗",
    "7,6": "♘",
    "7,7": "♖",
    "6,0": "♙",
    "6,1": "♙",
    "6,2": "♙",
    "6,3": "♙",
    "6,4": "♙",
    "6,5": "♙",
    "6,6": "♙",
    "6,7": "♙",

    // Black pieces (top rows)
    "0,0": "♜",
    "0,1": "♞",
    "0,2": "♝",
    "0,3": "♛",
    "0,4": "♚",
    "0,5": "♝",
    "0,6": "♞",
    "0,7": "♜",
    "1,0": "♟",
    "1,1": "♟",
    "1,2": "♟",
    "1,3": "♟",
    "1,4": "♟",
    "1,5": "♟",
    "1,6": "♟",
    "1,7": "♟",
  };

  return pieces[`${row},${col}`] || null;
}

function App() {
  // const columns = [];
  // for (let j = 0; j < 4; j++) {
  //   const row = [];

  //   for (let i = 0; i < 4; i = i + 1) {
  //     row.push(box, box2);
  //   }

  //   columns.push(
  //     <div
  //       style={{
  //         display: "flex",
  //         flexDirection: "column",
  //       }}
  //     >
  //       {row}
  //     </div>
  //   );

  //   const row2 = [];

  //   for (let i = 0; i < 4; i = i + 1) {
  //     row2.push(box2, box);
  //   }

  //   columns.push(
  //     <div
  //       style={{
  //         display: "flex",
  //         flexDirection: "column",
  //       }}
  //     >
  //       {row2}
  //     </div>
  //   );
  // }

  // 15 / 2 = 7.5
  // 17 % 2 = 1

  const columns = [];

  for (let j = 0; j < 8; j++) {
    const rows = [];
    for (let i = 0; i < 8; i++) {
      const isLightSquare = (i + j) % 2 === 0;
      const squareColor = isLightSquare ? "white" : "#8B4513";
      const piece = getChessPiece(i, j);

      if (isLightSquare) {
        rows.push(makeBox(squareColor, piece));
      } else {
        rows.push(makeBox(squareColor, piece));
      }
    }

    columns.push(
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {rows}
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">{columns}</header>
    </div>
  );
}

export default App;
