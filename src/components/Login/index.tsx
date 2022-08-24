import { Image } from "../common/Image";
import { Typography } from "../common/Typography";
import { LoginForm } from "./elements/LoginForm";
import classes from "./styles.module.css";

export const Login = () => {
  return (
    <>
    <div className={classes.container}>
      <div className={classes.loginInfoLeft}>
        <div className={classes.justifyContainer}>
          <Typography variant="h2" align="center">
            Manage the ecosystem
            <br /> Generate Orders
          </Typography>
          <Typography variant="body1" align="center">
            Track & review the performance of team and
            <br /> the theme
          </Typography>
          <Image src="/assets/images/login-banner.webp" width={500} />
        </div>
      </div>
      <div className={classes.loginInfoRight}>
        <LoginForm />
      </div>
    </div>
    </>
  );
};
