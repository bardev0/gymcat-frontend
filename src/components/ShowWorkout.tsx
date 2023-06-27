import useStore from "../Store";

function ShowWorkouts(props: any) {
  const userWorkouts = useStore((state: any) => state.userWorkouts);

  console.log(userWorkouts);
  return (
    <>
      <div>
        {" "}
        aaaaaa{/* map trough workouts*/}
        {userWorkouts.map((obj, key) => (
          <div>
            <p>{obj.date}</p>
						<p>{obj.totalDay}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default ShowWorkouts;
