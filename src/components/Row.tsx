import {useState} from "react";
import "../MainStyle.css";
import useStore from "../Store";
function Row() {

	const [total, setTotal] = useState<number | undefined>(0)
	
	interface Row {
	numerSerii: number;
	mg: string;
	exerc: string;
	multiplier: number;
	pow: number;
	kilog: number;
	total?: number;
	}

	class Row implements Row {
	constructor(nS: number, mg: string, e: string, m: number, p: number, kg: number) {
	
	this.numerSerii = nS;
	this.mg = mg;
	this.exerc = e;
	this.multiplier = m;
	this.pow = p;
	this.kilog = kg;

	}

	calcTotal(m:number, p: number, kg:number) {
		this.total = (m * p * kg)
	}
	}

	let r = new Row

	const changeSerNum = (e: React.ChangeEvent<HTMLInputElement>) => {
		r.numerSerii = (parseInt(e.target.value, 10))
		r.calcTotal(r.multiplier, r.pow, r.kilog)

		console.log(r)
	}

	const changeMulti = (e: React.ChangeEvent<HTMLInputElement>) => {
		r.multiplier = (parseInt(e.target.value, 10))
		r.calcTotal(r.multiplier, r.pow, r.kilog)

		console.log(r)
	}
	
	const changePow = (e: React.ChangeEvent<HTMLInputElement>) => {
		r.pow = (parseInt(e.target.value, 10))
		r.calcTotal(r.multiplier, r.pow, r.kilog)
		console.log(r)
	}
	const changeKg = (e: React.ChangeEvent<HTMLInputElement>) => {
		r.kilog = (parseInt(e.target.value, 10))
		r.calcTotal(r.multiplier, r.pow, r.kilog)
		console.log(r)
		setTotal(r.total)
		}

  return (
    <>
      <div>
        <input onChange={changeSerNum} placeholder="numer serii"></input>
        <input placeholder="grupa"></input>
        <input placeholder="cwiczenie"></input>
        <input onChange={changeMulti} placeholder="mnoznik"></input>
        <input onChange={changePow} placeholder="pow"></input>
        <input onChange={changeKg} placeholder="kg"></input>
        <span>{total}</span>
      </div>
    </>
  );
}

export default Row;
