import { Typography } from "@components/common";
import { ApprovalsContainer } from "./elements/ApprolvalsContainer";
import classes from "./styles.module.css";

export const PendingApprovals = () => {
  return (
    <div className={classes.container}>
      <Typography variant="h2">Pending Approvals</Typography>
      <ApprovalsContainer />
    </div>
  );
};
