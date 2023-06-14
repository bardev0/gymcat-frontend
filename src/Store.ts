import { create } from "zustand";

const useStore = create((set) => ({
  userName: "",
  isUserLoggedIn: false,
  userWorkouts: [],
  startingTemplate: {
    series: 1,
    rows: 1,
    seriesA: [1],
    rowsA: [1],
  },
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
}));

export default useStore;
