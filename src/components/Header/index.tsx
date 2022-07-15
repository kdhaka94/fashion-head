import { Avatar } from "@mui/material";
import classes from "./styles.module.css";

export const Header = ({
  username = "Kuldeep",
  profileImage = "https://mui.com/static/images/avatar/1.jpg",
}) => {
  return (
    <div className={classes.navbar}>
      <div className={classes.heading}>Fashion Head</div>
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
