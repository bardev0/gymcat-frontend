import { useState } from "react";
import Row from "./Row";
function Table() {
  // remove erong template from store

  let [rowsNum, setRowsNum] = useState([1]);
  let workout = {
    exercisie: [
      {
        numOfSeries: 1,
        numOfRow: 1,
        mg: "klatka",
        exerc: "benchpress",
      },
      {
        numOfSeries: 1,
        numOfRow: 2,
        mg: "klatka",
        exerc: "butterflies",
      },
    ],
  };

  const rowPlus = () => {
    let temp = [...rowsNum];
    let idx = temp.at(-1);
    temp.push(idx! + 1);
    setRowsNum(temp);
    console.log(temp);
  };

  const rowMinus = () => {
    let temp = [...rowsNum];
    temp.pop();
    setRowsNum(temp);
    console.log(temp);
  };
	
	

  return (
    <>
      <div>
        <button onClick={rowPlus}>+ Row</button>
        <button onClick={rowMinus}>- Row</button>
        <button>Generate</button>
        <div className="rowBlock">
          {rowsNum.map((obj, idx) => (
            <Row />
          ))}
        </div>
      </div>
    </>
  );
}

export default Table;
