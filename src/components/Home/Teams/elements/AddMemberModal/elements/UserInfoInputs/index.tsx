import { Input, InputLabel } from "@components/common";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React from "react";
import { InputCompIProps } from "../../types";
import classes from "./styles.module.css";

export const UserInfoInputs = ({ handleChange, state }: InputCompIProps) => {
  return (
    <>
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
            <RadioGroup
              defaultValue="male"
              name="gender"
              row
              onChange={handleChange}
              value={state.gender.value}
            >
              <FormControlLabel value="male" control={<Radio />} label="Male" />
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
    </>
  );
};
