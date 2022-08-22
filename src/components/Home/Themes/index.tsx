import { Button, Typography } from "@components/common";
import { AddRounded } from "@mui/icons-material";
import { ThemesContainer } from "./elements/ThemesContainer";
import classes from "./styles.module.css";
import { useHeadStore } from "@utils/zustand/store";
import React from "react";
import { INITIAL_STATE } from "./elements/CreateThemeModal/types";

export const Themes = () => {
  const { closeModal, currentModals, openModal } = useHeadStore();
  const isOpen = currentModals.includes("createTheme");

  return (
    <div className={classes.container}>
      <div className={classes.subContainer}>
        <Typography variant="h2">Themes</Typography>
        <div className={classes.filtersContainer}>
          <Typography variant="caption">Filter by</Typography>
          <Button
            size="small"
            onClick={() => openModal("createTheme")}
            disabled={isOpen}
          >
            <AddRounded /> Create A Theme
          </Button>
        </div>
      </div>
      <ThemesContainer />
    </div>
  );
};
