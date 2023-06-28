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
                        {obj.date}
                        <span> </span>
                        {obj.timeStart}
                        <span> </span>
                        {obj.totalDay}
                    </div>
                ))}
            </div>
        </>
    );
}

export default ShowWorkouts;
