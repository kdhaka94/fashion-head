import { AddMemberModal } from "@components/Home/Teams/elements/AddMemberModal";
import { CreateThemeModal } from "@components/Home/Themes/elements/CreateThemeModal";
import { User } from "@data/auth/types";

export type HeadStoreTypes = {
  currentModals: ModalListType[];
  openModal: (name: ModalListType) => void;
  closeModal: (name: ModalListType) => void;
  user: User | null;
  setUser: (user: User) => void;
};

type ModalListType = keyof typeof modals;

export const modals = {
  addMember: <AddMemberModal />,
  createTheme: <CreateThemeModal />,
  updateTheme: <CreateThemeModal isEdit={true} />,
};

export type SetStateFunc<T> = (
  partial: T | Partial<T> | ((state: T) => T),
  replace?: boolean | undefined
) => void;

export type GetStateFunc<T> = () => T;
