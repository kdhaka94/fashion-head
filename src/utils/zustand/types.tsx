import { AddMemberModal } from "@components/Home/Teams/elements/AddMemberModal";

export type HeadStoreTypes = {
  currentModals: ModalListType[];
  openModal: (name: ModalListType) => void;
  closeModal: (name: ModalListType) => void;
};

type ModalListType = keyof typeof modals;

export const modals = {
  addMember: <AddMemberModal />,
};

export type SetStateFunc<T> = (
  partial: T | Partial<T> | ((state: T) => T),
  replace?: boolean | undefined
) => void;

export type GetStateFunc<T> = () => T;
