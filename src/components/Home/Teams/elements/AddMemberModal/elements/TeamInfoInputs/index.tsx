import { Autocomplete, Input, TextField } from "@components/common";
import React from "react";
import { dataTemplate, InputCompIProps } from "../../types";
import classes from "./styles.module.css";

export const TeamInfoInputs = ({ handleChange, state }: InputCompIProps) => {
  return (
    <>
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
    </>
  );
};
