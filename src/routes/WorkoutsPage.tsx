import useStore from "../Store";

// it could be either Page or element of Home
function WorkoutsPage() {
  const workouts = useStore((state: any) => state.userWorkouts);

  // clicking the wok.date przenosi nas do konkretnego treningu z analiza itp
  return (
    <>
      <div>
        {workouts.map((wok, idx: number) => (
          <p>{wok.date}</p>
        ))}
      </div>
    </>
  );
}

export default WorkoutsPage;
