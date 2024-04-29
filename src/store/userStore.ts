import { create } from "zustand";

export interface userInfoType {
  profileUrl: string | null | undefined;
  name: string | null | undefined;
}

interface UserInfo {
  user: userInfoType;
}

interface UserInfoActions {
  setUser: (userinfo: userInfoType) => void;
  deleteUser: () => void;
}

const defaultState = { profileUrl: "", name: "" };

export const userStore = create<UserInfo & UserInfoActions>((set) => ({
  user: defaultState,
  setUser: (user: userInfoType) => {
    set({ user });
  },
  deleteUser: () => {
    set({ user: defaultState });
  },
}));
