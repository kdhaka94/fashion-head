import { Typography } from "@components/common";
import { Autocomplete } from "@components/common/Autocomplete";
import React from "react";
import classes from "./styles.module.css";

type IProps = {
  headerName: string;
  onChange?: (filter: string) => void;
  className?: string;
};
// TODO: Implement onChange for select autocomplete
export const FilterHeader = ({ headerName, onChange, className }: IProps) => {
  const classNames = [classes.container, className].join(" ");
  return (
    <div className={classNames}>
      <Typography variant="h2">{headerName}</Typography>
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
