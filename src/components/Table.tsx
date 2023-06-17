import { useState } from "react";
import Row from "./Row";
import useStore from "../Store";
function Table() {
  const storeAry = useStore((state: any) => state.startingTemplate);
  const setTemplateArry = useStore((state: any) => state.setTemplateArry);
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

  // add check if is < 1
  const rowPlus = () => {
    let temp = [...rowsNum];
    let idx = temp.at(-1);

    if (isNaN(idx!)) {
      temp.push(1);
    } else {
      temp.push(idx! + 1);
    }
    setRowsNum(temp);
    // console.log(temp);
    setTemplateArry(temp);
    console.log(storeAry);
  };

  const rowMinus = () => {
    let temp = [...rowsNum];
		if (temp.length > 1 )	{
		temp.pop()
		}
    setRowsNum(temp);
    // console.log(temp);
    setTemplateArry(temp);
    console.log(storeAry);
  };

  console.log(rowsNum);

  return (
    <>
      <div>
        <button onClick={rowPlus}>+ Row</button>
        <button onClick={rowMinus}>- Row</button>
        <button>Generate</button>
        <div className="rowBlock">
          {rowsNum.map((obj, idx) => (
            <Row numberOfRow={idx} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Table;
