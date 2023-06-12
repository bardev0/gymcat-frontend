import { useState } from "react";

// connect to Store to retive all possible exercises

function TableSeries(props: any) {
  let numberOfPossibleExerc = [1, 2, 3, 4, 5, 6, 7, 8];
  let [numOfExerc, setNumOfExerc] = useState<number[]>([]);

  const handleIloscExerc = (e: any) => {
    let tempAry = [];
    for (let i = 0; i < e.target.value; i++) {
      tempAry.push(i + 1);
    }
    setNumOfExerc(tempAry);
  };
  return (
    <>
      <div>
        <div>{props.idxSer}</div>
      </div>
      <div>
        <label>ilosc cwiczen</label>
        <select onChange={handleIloscExerc}>
          {numberOfPossibleExerc.map((e) => (
            <option key={e} value={e}>
              {e}
            </option>
          ))}
        </select>
      </div>
      {numOfExerc.map((exerRow) => (
        <div>
          {/* faktyczny Row do wpisywania treningow */}
          <div>
					<label>Grupa Cwiczen</label>
          <select></select>
					</div>
        </div>
      ))}
    </>
  );
}

function WorkoutTableBody() {
  let numberOfPossibleSeries = [1, 2, 3, 4, 5, 6];
  let [numberOfWorkouts, setNumberOfWorkouts] = useState<number[]>([]);

  const handleIloscSerii = (e: any) => {
    let tempAry = [];
    for (let i = 0; i < e.target.value; i++) {
      tempAry.push(i + 1);
    }
    setNumberOfWorkouts(tempAry);
  };

  return (
    <>
      <div>
        <div>
          <label>Nr Serii : </label>
          <select onChange={handleIloscSerii}>
            {numberOfPossibleSeries.map((element) => (
              <option value={element}>{element}</option>
            ))}
          </select>
          {numberOfWorkouts.map((e) => (
            <TableSeries idxSer={e} />
          ))}
        </div>
      </div>

      <tbody></tbody>
    </>
  );
}

export default WorkoutTableBody;
