import { Button, Image, Typography } from "@components/common";
import { Grid } from "@mui/material";
import React from "react";
import { ReviewItem } from "../ReviewItem";
import classes from "./styles.module.css";

export const ReviewContainer = () => {
  return (
    <div className={classes.container}>
      <Grid container spacing={8}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33, 44, 55, 66, 77, 88, 99].map(
          (_) => (
            <Grid item xs="auto" key={_}>
              <ReviewItem />
            </Grid>
          )
        )}
      </Grid>
    </div>
  );
};
