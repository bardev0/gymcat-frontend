import { create } from "zustand";

const useStore = create((set, get) => ({
  userName: "",
  isUserLoggedIn: false,
  userWorkouts: [],
  startingTemplate: [],
  temporaryWorkout: [],
  setUserName: (name: string) =>
    set((state: any) => ({ userName: (state.userName = name) })),
  setIsUserLogged: (login_state: any) =>
    set((state: any) => ({
      isUserLoggedIn: (state.isUserLoggedIn = login_state),
    })),
  setUserWorkouts: (workouts: Array<any>) =>
    set((state: any) => ({
      userWorkouts: (state.userWorkouts = workouts),
    })),
  setTemplateArry: (arr: Array<any>) =>
    set((state: any) => ({
      startingTemplate: (state.startingTemplate = arr),
    })),
  setWorkout: (arr: Array<any>) =>
    set((state: any) => ({
      temporaryWorkout: (state.temporaryWorkout = arr),
    })),
}));

export default useStore;
