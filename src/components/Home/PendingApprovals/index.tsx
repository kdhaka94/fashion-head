import { Grid } from "@mui/material";
import { Typography } from "../../common";
import { Approval } from "./elements/Approval";
import classes from "./styles.module.css";

export const PendingApprovals = () => {
  return (
    <div className={classes.container}>
      <Typography variant="h2">Pending Approvals</Typography>
      
    </div>
  );
};
