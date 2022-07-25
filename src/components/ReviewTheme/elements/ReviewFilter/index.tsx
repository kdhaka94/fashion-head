import { Typography } from "@components/common";
import { Autocomplete } from "@components/common/Autocomplete";
import React from "react";
import classes from "./styles.module.css";

export const ReviewFilter = () => {
  return (
    <div className={classes.container}>
      <Typography variant="h3">Review Theme</Typography>
      <div className={classes.filterContainer}>
        <Typography variant="caption">Filter by</Typography>
        <Autocomplete
          placeholder="All theme"
          sx={{
            width: 120,
          }}
        />
      </div>
    </div>
  );
};
