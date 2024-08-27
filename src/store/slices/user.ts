import type {StateCreator} from 'zustand';

type State = {
  accessToken: string | null;
  refreshToken: string | null;
  user: IUser | null;
};

type Actions = {
  setAccessToken: (accessToken: string) => void;
  setUser: (user: IUser) => void;
  logoutUser: () => void;
};

export interface UserSlice extends State, Actions {}

const initialState: State = {
  accessToken: null,
  user: null,

  refreshToken: null,
};

export const createUserSlice: StateCreator<UserSlice> = (set, get) => ({
  ...initialState,
  setUser: (user) => set({user}),
  logoutUser: () => set(initialState),
  setAccessToken: (accessToken) => set({accessToken}),
});
