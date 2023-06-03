import { create } from "zustand";

const useStore = create((set) => ({
  userName: "",
  isUserLoggedIn: false,
  setUserName: (name: string) =>
    set((state: any) => ({ userName: (state.userName = name) })),
  setIsUserLogged: (login_state: any) =>
    set((state: any) => ({
      isUserLoggedIn: (state.isUserLoggedIn = login_state),
    })),
}));

export default useStore;
