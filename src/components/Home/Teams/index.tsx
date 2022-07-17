import { Typography } from "../../common";
import { TeamsHeader } from "./elements/TeamsHeader";
import classes from "./styles.module.css";

export const Teams = () => {
  return (
    <div className={classes.container}>
      <Typography variant="h2">Teams</Typography>
      <TeamsHeader />
    </div>
  );
};
