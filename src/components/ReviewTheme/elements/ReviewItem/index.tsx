import { Button, Image, Typography } from "@components/common";
import { Grid } from "@mui/material";
import React from "react";
import classes from "./styles.module.css";

export const ReviewItem = ({
  image = "https://mui.com/static/images/avatar/1.jpg",
  name = "Printed Cotten",
}) => {
  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        <Image src={image} />
      </div>
      <Typography variant="caption">{name}</Typography>
      <Button variant="outlined" fullWidth>
        Reject
      </Button>
    </div>
  );
};
