import {
  Button,
  Image,
  Input,
  InputLabel,
  Typography,
} from "@components/common";
import { Modal } from "@components/common/Modal";
import { AddRounded } from "@mui/icons-material";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React from "react";
import classes from "./styles.module.css";
import { INITIAL_STATE, StateNameType } from "./types";

export const CreateThemeModal = () => {
  const [open, setOpen] = React.useState(false);
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
    <>
      <Button size="small" onClick={() => setOpen(true)} disabled={open}>
        <AddRounded /> Create A Theme
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className={classes.container}>
          <Typography variant="h1">Create Theme</Typography>
          <div className={classes.flexContainer}>
            <div className={classes.imageContainer}>
              <div>
                <Image
                  src="/assets/images/camera-icon.webp"
                  width={62}
                  height={50}
                />
                <Typography variant="body2" align="center" color="#a3a3a3">
                  Add Theme
                  <br />
                  Photo
                </Typography>
              </div>
              <Button variant="outlined" size="small">
                <Image
                  src="/assets/images/upload-icon.webp"
                  width={18}
                  height={18}
                />
                &nbsp; Upload a Photo
              </Button>
            </div>
            <div className={classes.inputsContainer}>
              <Input
                placeholder="Enter theme name"
                label="Theme Name"
                name="theme"
                onChange={handleChange}
                value={state.theme.value}
                error={!!state.theme.error}
                errorText={state.theme.error}
                fullWidth
              />
              <div>
                <InputLabel title="Gender" />
                <RadioGroup defaultValue="male" name="gender" row>
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
              <Input
                placeholder="Enter team name"
                label="Team Name"
                name="team"
                onChange={handleChange}
                value={state.team.value}
                error={!!state.team.error}
                errorText={state.team.error}
                fullWidth
              />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
