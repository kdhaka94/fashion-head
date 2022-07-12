import React from "react";
import { Image } from "../common/Image";
import classes from "./styles.module.css";

export const Login = () => {
  return (
    <div className={classes.container}>
      <div className={classes.loginInfoLeft}>
        <div className={classes.justifyContainer}>
          <div className={classes.Manageecosystem}>
            Manage the ecosystem Generate Orders
          </div>
          <div className={classes.Trackreview}>
            Track & review the performance of team and the theme
          </div>
          <Image src="/assets/images/login-banner.webp" width={500} />
        </div>
      </div>
      <div className={classes.loginInfoRight}>
        
      </div>
    </div>
  );
};
