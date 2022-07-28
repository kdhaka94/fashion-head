import {
    Autocomplete,
    Button,
    Input,
    InputLabel,
    TextField,
    Typography
} from "@components/common";
import { Modal, ModalActions, ModalBody } from "@components/common/Modal";
import { dataTemplate } from "@components/Home/Themes/elements/CreateThemeModal/types";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React from "react";
import classes from "./styles.module.css";
import { INITIAL_STATE, StateNameType } from "./types";

// TODO: add api handlers for input fields
// TODO: seprate batch input fields to seprate files and only pass required functions and state values
// TODO: create a handleSubmit function and validater for the required and spacial values

export const AddMemberModal = () => {
  const [open, setOpen] = React.useState(true);
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
    <Modal open={open} onClose={(open) => setOpen(!open)}>
      <ModalBody>
        <div className={classes.container}>
          <Typography variant="h1">Add a member</Typography>
          <div className={classes.flexContainer}>
            <div className={`${classes.flexContainer} ${classes["gap-20"]}`}>
              <Input
                placeholder="Name"
                label="Enter Name"
                name="name"
                onChange={handleChange}
                value={state.name.value}
                error={!!state.name.error}
                errorText={state.name.error}
                fullWidth
              />
              <div className={classes.radioContainer}>
                <InputLabel title="Gender" />
                <RadioGroup defaultValue="male" name="gender" row onChange={handleChange} value={state.gender.value}>
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                </RadioGroup>
              </div>
            </div>
          </div>
          <div className={`${classes.flexContainer} ${classes["gap-20"]}`}>
            <Input
              placeholder="Enter Phone Number"
              label="Phone Number"
              name="phoneNumber"
              onChange={handleChange}
              value={state.phoneNumber.value}
              error={!!state.phoneNumber.error}
              errorText={state.phoneNumber.error}

              fullWidth
            />
            <Input
              placeholder="Enter Email"
              label="Email"
              name="email"
              onChange={handleChange}
              value={state.email.value}
              error={!!state.email.error}
              errorText={state.email.error}
              fullWidth
            />
          </div>
          <div className={`${classes.flexContainer} ${classes["gap-20"]}`}>
            <Input
              placeholder="Upload Document"
              label="Upload Resume"
              name="phoneNumber"
              // onChange={handleChange}
              // value={state.team.value}
              // error={!!state.team.error}
              // errorText={state.team.error}

              fullWidth
            />
            <Input
              placeholder="Upload Document"
              label="Upload ID"
              name="email"
              // onChange={handleChange}
              // value={state.team.value}
              // error={!!state.team.error}
              // errorText={state.team.error}
              fullWidth
            />
          </div>
          <div className={`${classes.flexContainer} ${classes["gap-20"]}`}>
            <Autocomplete
              placeholder="Select a team"
              label="Team"
              name="team"
              // onChange={handleChange}
              // value={state.team.value}
              // error={!!state.team.error}
              // errorText={state.team.error}

              fullWidth
              options={dataTemplate}
            />
            <Autocomplete
              placeholder="Select a role"
              label="Role"
              name="role"
              // onChange={handleChange}
              // value={state.team.value}
              // error={!!state.team.error}
              // errorText={state.team.error}
              fullWidth
              options={dataTemplate}
            />
          </div>
          <TextField
            placeholder="Write notes here"
            label="Notes"
            name="notes"
            onChange={handleChange}
            value={state.notes.value}
            multiline
            minRows={5}
            fullWidth
          />
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
