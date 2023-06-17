import { useState } from "react";
import "../MainStyle.css";
import useStore from "../Store";
function Row(props: any) {
  const storAry = useStore((state: any) => state.startingTemplate);
  const setTemplateArry = useStore((state: any) => state.setTemplateArry);
  const [total, setTotal] = useState<number | undefined>(0);

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
      kg: number
    ) {
      this.numerSerii = nS;
      this.mg = mg;
      this.exerc = e;
      this.multiplier = m;
      this.pow = p;
      this.kilog = kg;
    }

    calcTotal(m: number, p: number, kg: number) {
      this.total = m * p * kg;
    }
  }

  // console.log(storAry);
	// with every update row goes blanc

  let r = new Row();
	r.numerRow = props.numOfRow
  // move row to store array

  function updateStore(rowIdx: number) {
    console.log(storAry);
    console.log(typeof storAry);
    console.log(storAry[1]);
  }

  const changeSerNum = (e: React.ChangeEvent<HTMLInputElement>) => {
    r.numerSerii = parseInt(e.target.value, 10);
    r.calcTotal(r.multiplier, r.pow, r.kilog);
    updateStore(1);

    console.log(r);
  };

  const changeMulti = (e: React.ChangeEvent<HTMLInputElement>) => {
    r.multiplier = parseInt(e.target.value, 10);
    r.calcTotal(r.multiplier, r.pow, r.kilog);
    updateStore(1);

    console.log(r);
  };

  const changePow = (e: React.ChangeEvent<HTMLInputElement>) => {
    r.pow = parseInt(e.target.value, 10);
    r.calcTotal(r.multiplier, r.pow, r.kilog);
    updateStore(1);

    console.log(r);
  };
  const changeKg = (e: React.ChangeEvent<HTMLInputElement>) => {
    r.kilog = parseInt(e.target.value, 10);
    r.calcTotal(r.multiplier, r.pow, r.kilog);
    updateStore(1);

    console.log(r);
  };

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
