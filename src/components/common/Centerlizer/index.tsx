import React from "react";
import classes from "./styles.module.css";

export const Centerlizer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={classes.outerContainer}>
      <div className={classes.innerContainer}>{children}</div>
    </div>
  );
};
