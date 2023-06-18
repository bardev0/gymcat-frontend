import ShowWorkouts from "./ShowWorkout";
import NewWorkout from "./NewWorkout";
import Profile from "./Profile";
import Templates from "./Templates";
import Analysys from "./Analysys";
import Settings from "./Settings";

function MainView(props: any) {
  let componentToRender;

  switch (props.view) {
    case "workouts":
      componentToRender = <ShowWorkouts />;
  		break;
	
		case "profile":
			componentToRender = <Profile />;
			break;

		case "new workout":
			componentToRender = <NewWorkout />;
			break;

		case "templates":
			componentToRender = <Templates />;
			break;
		
		case "analysys":
			componentToRender = <Analysys />;
			break;

		case "settings":
		componentToRender = <Settings />;
		break;

	}
  return (
    <>
      <div>{componentToRender}</div>
    </>
  );
}

export default MainView;
