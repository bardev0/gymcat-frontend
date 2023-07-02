const prod = "http://191.96.53.225:3000/"
const dev = "http://localhost:5001/"
const env = dev

const paths = {
		loginPath: env + "login",
		registerPath: env + "addUser",
		validatePath: env + "validateUser",
		addWorkoutPath: env + "addWorkout"
};

export default paths;
