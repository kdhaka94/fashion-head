import {
  Button,
  Image,
  Input,
  InputLabel,
  Typography,
} from "@components/common";
import { Autocomplete } from "@components/common/Autocomplete";
import { Modal, ModalActions, ModalBody } from "@components/common/Modal";
import { AddRounded } from "@mui/icons-material";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { useHeadStore } from "@utils/zustand/store";
import React from "react";
import classes from "./styles.module.css";
import { dataTemplate, INITIAL_STATE, StateNameType } from "./types";

export const CreateThemeModal = () => {
  const { closeModal, currentModals, openModal } = useHeadStore();
  const isOpen = currentModals.includes("createTheme");
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
      <Button
        size="small"
        onClick={() => openModal("createTheme")}
        disabled={isOpen}
      >
        <AddRounded /> Create A Theme
      </Button>
      <Modal open={isOpen} onClose={() => closeModal("createTheme")}>
        <ModalBody>
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
                <Button variant="outlined" size="small" component="label">
                  <input hidden accept="image/*" multiple type="file" />
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
                <Autocomplete
                  placeholder="Select Team"
                  label="Team Name"
                  name="team"
                  // onChange={handleChange}
                  // value={state.team.value}
                  // error={!!state.team.error}
                  // errorText={state.team.error}
                  fullWidth
                  options={dataTemplate}
                />
              </div>
            </div>
            <div className={`${classes.flexContainer} ${classes["gap-20"]}`}>
              <Autocomplete
                placeholder="Search Brand"
                label="Brand(Optional)"
                name="team"
                // onChange={handleChange}
                // value={state.team.value}
                // error={!!state.team.error}
                // errorText={state.team.error}

                fullWidth
                options={dataTemplate}
              />
              <Autocomplete
                placeholder="Plan"
                label="Choose Plan"
                name="team"
                // onChange={handleChange}
                // value={state.team.value}
                // error={!!state.team.error}
                // errorText={state.team.error}
                fullWidth
                options={dataTemplate}
              />
            </div>
            <Autocomplete
              placeholder="Category(Optional)"
              label="Search Category"
              name="team"
              // onChange={handleChange}
              // value={state.team.value}
              // error={!!state.team.error}
              // errorText={state.team.error}
              fullWidth
              options={dataTemplate}
            />
          </div>
        </ModalBody>
        <ModalActions>
          <div className={classes.submitContainer}>
            <Button>Submit</Button>
          </div>
        </ModalActions>
      </Modal>
    </>
  );
};
