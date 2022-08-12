import { Button, Typography } from "@components/common";
import { Modal, ModalActions, ModalBody } from "@components/common/Modal";
import { useHeadStore } from "@utils/zustand/store";
import React from "react";
import { TeamInfoInputs } from "./elements/TeamInfoInputs";
import { UserInfoInputs } from "./elements/UserInfoInputs";
import classes from "./styles.module.css";
import { INITIAL_STATE, StateNameType } from "./types";

// TODO: add api handlers for input fields
// TODO: seprate batch input fields to seprate files and only pass required functions and state values
// TODO: create a handleSubmit function and validater for the required and spacial values

export const AddMemberModal = () => {
  const { closeModal, currentModals } = useHeadStore((state) => state);
  const [state, setState] = React.useState(INITIAL_STATE);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setState({
      ...state,
      [e.currentTarget.name as StateNameType]: {
        ...state[e.currentTarget.name as StateNameType],
        value: e.currentTarget.value,
        error: "",
      },
    });
  };

  const setError = (field: StateNameType, error: string) => {
    setState({
      ...state,
      [field]: {
        ...state[field],
        error,
      },
    });
  };
  return (
    <Modal
      open={currentModals.includes("addMember")}
      onClose={() => closeModal("addMember")}
    >
      <ModalBody>
        <div className={classes.container}>
          <Typography variant="h1">Add a member</Typography>

          <UserInfoInputs handleChange={handleChange} state={state} />

          <TeamInfoInputs handleChange={handleChange} state={state} />
        </div>
      </ModalBody>
      <ModalActions>
        <div className={classes.justifyCenter}>
          <Button>Submit</Button>
        </div>
      </ModalActions>
    </Modal>
  );
};
