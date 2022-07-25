import { Button } from "@components/common";
import React from "react";
import classes from "./styles.module.css";

export const ReviewFooter = () => {
  return (
    <div className={classes.container}>
      <Button>Accept All Items</Button>
    </div>
  );
};
