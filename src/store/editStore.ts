import { create } from "zustand";

interface IEdit {
  edit: boolean;
  toggleEdit: () => void;
}

export const useEditStore = create<IEdit>((set) => ({
  edit: false,
  toggleEdit: () =>
    set((state) => ({ edit: state.edit === false ? true : false })),
}));
