import * as React from "react";
import { useEffect, useState } from "react";
import "../MainStyle.css";
import useStore from "../Store";

function Row(props: any) {
    const storAry = useStore((state: any) => state.startingTemplate);
    const setTemplateArry = useStore((state: any) => state.setTemplateArry);
    const work = useStore((state: any) => {
        state.temporaryWorkout;
    });
    const setTempWorkout = useStore((state: any) => state.setWorkout);

    const [workout, setWorkout] = useState(storAry);
    const [mg, setMg] = useState("");
    const [exer, setExerc] = useState("");
    const [pow, setPow] = useState(0);
    const [kg, setKg] = useState(0);
    const [multi, setMulti] = useState(0);
    const [serNum, setSerNum] = useState(0);
    const [total, setTotal] = useState(0);

    // addselection of exercices and muscle groups
    interface Row {
        numerRow: number;
        numerSerii?: number;
        mg?: string;
        exerc?: string;
        multiplier?: number;
        pow?: number;
        kilog?: number;
        total?: number;
    }

    class Row implements Row {
        constructor(
            nS: number,
            mg: string,
            e: string,
            m: number,
            p: number,
            kg: number,
            total: number
        ) {
            this.numerSerii = nS;
            this.mg = mg;
            this.exerc = e;
            this.multiplier = m;
            this.pow = p;
            this.kilog = kg;
            this.total = total;
        }
    }

    useEffect(() => {
        let total = multi * (pow * kg);
        if (isNaN(total)) {
            setTotal(0);
        } else {
            setTotal(total);
        }
    }, [kg, pow, multi]);

    useEffect(() => {
        let temp = storAry;
        console.log(temp[props.numberOfRow]);
        let r = new Row(serNum, mg, exer, multi, pow, kg, total);
        console.log(r);
        temp[props.numberOfRow] = r;
        console.log(temp);
        setTemplateArry(temp);
    }, [serNum, mg, exer, kg, pow, multi, total]);

    const changeMg = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMg(e.target.value);
    };

    const changeExer = (e: React.ChangeEvent<HTMLInputElement>) => {
        setExerc(e.target.value);
    };

    const changeSerNum = (e: React.ChangeEvent<HTMLInputElement>) => {
        let t = parseInt(e.target.value, 10);

        if (isNaN(t)) {
            window.alert("Provide correct series number");
        } else {
            setSerNum(parseInt(e.target.value, 10));
        }
    };
    const changeMulti = (e: React.ChangeEvent<HTMLInputElement>) => {
        let t = parseInt(e.target.value, 10);
        if (isNaN(t)) {
            setMulti(0);
        } else {
            setMulti(parseInt(e.target.value, 10));
        }
    };
    const changePow = (e: React.ChangeEvent<HTMLInputElement>) => {
        let t = parseInt(e.target.value, 10);
        if (isNaN(t)) {
            setMulti(0);
        } else {
            setPow(parseInt(e.target.value, 10));
        }
    };
    const changeKg = (e: React.ChangeEvent<HTMLInputElement>) => {
        let t = parseInt(e.target.value, 10);
        if (isNaN(t)) {
            setMulti(0);
        } else {
            setKg(parseInt(e.target.value, 10));
        }
    };

    return (
        <>
            <div className="row" id={props.numberOfRow + 1}>
                <input
                    className="inpSeria"
                    onChange={changeSerNum}
                    placeholder="#"
                ></input>
                <input
                    className="inpGrupa"
                    onChange={changeMg}
                    placeholder="grupa"
                ></input>
                <input
                    className="inpEx"
                    onChange={changeExer}
                    placeholder="cwiczenie"
                ></input>
                <input
                    className="inpM"
                    onChange={changeMulti}
                    placeholder="mnoznik"
                ></input>
                <input
                    className="inpPow"
                    onChange={changePow}
                    placeholder="pow"
                ></input>
                <input
                    className="inpKg"
                    onChange={changeKg}
                    placeholder="kg"
                ></input>
                <div className="rowTotal">
                    <span>{total}</span>
                </div>
            </div>
        </>
    );
}

export default Row;
