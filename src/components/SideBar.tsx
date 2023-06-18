function SideBar(props: any) {
  return (
    <>
      <aside>
        <button
          onClick={() => {
            props.logic("profile");
          }}
        >
          Profile
        </button>
        <button
          onClick={() => {
            props.logic("new workout");
          }}
        >
          New Workout
        </button>
        <button
          onClick={() => {
            props.logic("workouts");
          }}
        >
          Workouts
        </button>
        <button
          onClick={() => {
            props.logic("templates");
          }}
        >
          Templates
        </button>
        <button
          onClick={() => {
            props.logic("analysys");
          }}
        >
          Analysys
        </button>
        <button
          onClick={() => {
            props.logic("settings");
          }}
        >
          Settings
        </button>
      </aside>
    </>
  );
}

export default SideBar;
