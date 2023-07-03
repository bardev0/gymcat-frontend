import { useEffect, useState } from "react";
import Row from "./Row";
import useStore from "../Store";
function Table(props) {
    const storeAry = useStore((state: any) => state.startingTemplate);
    const setTemplateArry = useStore((state: any) => state.setTemplateArry);

    console.log(props.logic);
    let [rowsNum, setRowsNum] = useState([1]);

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
    };

    const rowMinus = () => {
        let temp = [...rowsNum];
        if (temp.length > 1) {
            temp.pop();
        }
        setRowsNum(temp);
        // console.log(temp);
        setTemplateArry(temp);
    };

    // add logics
    const handleDate = (e: any) => {
        console.log(e.target.value);
        props.logic[0](e.target.value);
    };

    const handleTimeStart = (e: any) => {
        console.log(e.target.value);
        props.logic[1](e.target.value);
    };

    const handleTimeEne = (e: any) => {
        console.log(e.target.value);
        props.logic[2](e.target.value);
    };

    return (
        <>
            <div>
                <div className="dataTime">
                    <div className="dataSelector">
                        <p>Data</p>
                        <input onChange={handleDate} type="date"></input>
                    </div>
                    <div className="dataSelector">
                        <p>Godzina start</p>
                        <input onChange={handleTimeStart} type="time"></input>
                    </div>
                    <div className="dataSelector">
                        <p>godzina koniec</p>
                        <input onChange={handleTimeEne} type="time"></input>
                    </div>
                </div>
                <div className="rowBtnContainer">
                    <button className="rowBtn" onClick={rowPlus}>
                        + Row
                    </button>
                    <button className="rowBtn" onClick={rowMinus}>
                        - Row
                    </button>
                    <button className="rowBtn">Generate</button>
                </div>
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
