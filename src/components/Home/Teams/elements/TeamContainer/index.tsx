import {
  KeyboardArrowDownRounded,
  KeyboardArrowUpRounded,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { TeamDataEntity } from "@data/teams/types";
import { Typography } from "@components/common";
import classes from "./styles.module.css";
import { AnimatePresence, motion } from "framer-motion";
type TeamType = {
  info: TeamDataEntity[];
  isOpen: boolean;
};

type IProps = {
  name: string;
  toggleShowTeam: (team: any) => void;
  team: TeamType;
};

export const TeamContainer = ({ name, toggleShowTeam, team }: IProps) => {
  return (
    <AnimatePresence>
      <motion.div
        className={classes.subContainer}
        animate={{ backgroundColor: team.isOpen ? "#f7f6ff" : "transparent" }}
      >
        <Typography variant="h4">Team {name}</Typography>
        <Typography variant="h4">100/200</Typography>
        <div className={classes.buttonContainer}>
          <IconButton size="small" onClick={(e) => toggleShowTeam(name)}>
            {team.isOpen ? (
              <KeyboardArrowUpRounded />
            ) : (
              <KeyboardArrowDownRounded />
            )}
          </IconButton>
        </div>
      </motion.div>
      {team.isOpen && (
        <motion.div animate>
          <div className={classes.teamMember}>
            <Typography variant="h4">Name</Typography>
            <Typography variant="h4">Selection</Typography>
            <Typography variant="h4">Order</Typography>
            <Typography variant="h4">Work Hours</Typography>
          </div>
          {team.info.map((teamData) => (
            <div className={classes.teamMember}>
              <Typography variant="caption">{`${teamData.firstName} ${teamData.lastName}`}</Typography>
              <Typography variant="caption">
                {teamData.totalSelected}
              </Typography>
              <Typography variant="caption">{teamData.totalOrder}</Typography>
              <Typography variant="caption">{teamData.hours}</Typography>
            </div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
