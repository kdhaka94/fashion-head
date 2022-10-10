import { Button, Typography } from "@components/common";
import { Modal, ModalActions, ModalBody } from "@components/common/Modal";
import { useHeadStore } from "@utils/zustand/store";
import React from "react";
import { TeamInfoInputs } from "./elements/TeamInfoInputs";
import { UserInfoInputs } from "./elements/UserInfoInputs";
import classes from "./styles.module.css";
import { INITIAL_STATE, StateNameType } from "./types";
import { useCreateTeamMutation } from "@data/createTeam/create-team.mutation";
// TODO: add api handlers for input fields
// DONE: seprate batch input fields to seprate files and only pass required functions and state values - IN_PROGRESS
// TODO: create a handleSubmit function and validater for the required and spacial values

export const AddMemberModal = () => {
  const { mutate: createTeam,isLoading } = useCreateTeamMutation();
  const { closeModal, currentModals } = useHeadStore((state) => state);
  const [state, setState] = React.useState(INITIAL_STATE);
  const isOpen = currentModals.includes("addMember");
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
  const submitData = ()=>{
    console.log(state);
    let arr=[...state.name.value.split(" ")];
    arr.shift();
    
const lastName=arr.join(" ");
   const data={
     username:"sksachin7z2",
      role:"head_selector",
      password:"sachin@1",
      firstName:state.name.value.split(" ")[0],
      lastName:(state.name.value.split(" ")[1])?lastName:"N/A",
      email:state.email.value,
      phone:state.phoneNumber.value,
      countryCode:"+91",
      gender: state.gender.value,
      themes: [],
      uploadedResume:[],
      uploadedId:[],
      monthlyStipend: 0,
      notes : state.notes.value,
      isHeadSelector: false,
      team:["A"]
    }
    console.log(data);
    
    createTeam(
      data,
      {
        onSuccess: (data) => {
          console.log({ data });
        },
        onError: (err: any) => {

        },
      }
    )
  }
  return (
    <Modal open={isOpen} onClose={() => closeModal("addMember")}>
      <ModalBody>
        <div className={classes.container}>
          <Typography variant="h1">Add a member</Typography>

          <UserInfoInputs handleChange={handleChange} state={state} />

          <TeamInfoInputs handleChange={handleChange} state={state} />
        </div>
      </ModalBody>
      <ModalActions>
        <div className={classes.justifyCenter}>
          <Button onClick={submitData} disabled={isLoading}>Submit</Button>
        </div>
      </ModalActions>
    </Modal>
  );
};
