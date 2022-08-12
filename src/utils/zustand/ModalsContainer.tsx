import React from "react";
import { useHeadStore } from "./store";
import { modals } from "./types";

export const ModalsContainer = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  const modalNames = useHeadStore((state) => state.currentModals);
  return <>{modalNames.map((modal) => modals[modal])}</>;
};
