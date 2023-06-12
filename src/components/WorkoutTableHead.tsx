function WorkoutTableHead(workouts: any) {
  // can be shared as workoutTable head for insert / edit / display
  return (
    <>
      {/* so far in Polish lang*/}
      <table>
        <thead>
          <td>Seria</td>
          <td>Grupa</td>
          <td>Cwiczenie</td>
          <td>Mnożnik</td>
          <td>Pow</td>
          <td>KG</td>
          <td>Total</td>
        </thead>
      </table>
    </>
  );
}

export default WorkoutTableHead;

// add collection to DB of User -> Workouts ( specific user defining exercices )
// add collection of all avalible exercices
