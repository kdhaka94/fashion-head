import React from "react";
import { Avatar, IconButton } from "@mui/material";
import classes from "./styles.module.css";
import { KeyboardArrowLeftRounded } from "@mui/icons-material";

export const ReviewHeader = ({
  username = "Kuldeep",
  profileImage = "https://mui.com/static/images/avatar/1.jpg",
}) => {
  return (
    <div className={classes.navbar}>
      <div className={classes.heading}>
        <IconButton>
          <KeyboardArrowLeftRounded />
        </IconButton>
      </div>
      <div className={classes.userInfoContainer}>
        Hi {username},{" "}
        <span>
          Welcome back
          <Avatar alt={username} src={profileImage} />
        </span>
      </div>
    </div>
  );
};
