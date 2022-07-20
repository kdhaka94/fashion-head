import { Button, Typography } from "@components/common";
import { AddRounded } from "@mui/icons-material";
import React from "react";
import { ThemesContainer } from "./elements/ThemesContainer";
import classes from "./styles.module.css";

export const Themes = () => {
  return (
    <div className={classes.container}>
      <div className={classes.subContainer}>
        <Typography variant="h2">Themes</Typography>
        <div className={classes.filtersContainer}>
          <Typography variant="caption">Filter by</Typography>
          <Button size="small">
            <AddRounded /> Create A Theme
          </Button>
        </div>
      </div>
      <ThemesContainer />
    </div>
  );
};
