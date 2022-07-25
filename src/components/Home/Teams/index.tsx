import { Typography } from "../../common";
import { TeamsHeader } from "./elements/TeamsHeader";
import { ViewProfileModal } from "./elements/ViewProfileModal";
import classes from "./styles.module.css";

export const Teams = () => {
  return (
    <div className={classes.container}>
      <Typography variant="h2">Teams</Typography>
      <TeamsHeader />
      <ViewProfileModal />
    </div>
  );
};
