import { Button, Typography } from "@components/common";
import { TeamDataEntity } from "@data/teams/types";
import {
  KeyboardArrowDownRounded,
  KeyboardArrowUpRounded,
} from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import { Collapse, IconButton } from "@mui/material";
import { useHeadStore } from "@utils/zustand/store";
import { AnimatePresence, motion } from "framer-motion";
import { TransitionGroup } from "react-transition-group";
import classes from "./styles.module.css";

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
  const openModal = useHeadStore((state) => state.openModal);
  return (
    <AnimatePresence>
      <motion.div
        key={1}
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
      <TransitionGroup>
        {team.isOpen && (
          <Collapse>
            <motion.div animate key={2}>
              <div className={classes.teamMember}>
                <Typography variant="h4">Name</Typography>
                <Typography variant="h4">Selection</Typography>
                <Typography variant="h4">Order</Typography>
                <Typography variant="h4">Work Hours</Typography>
              </div>
              {team.info.map((teamData) => (
                <div className={classes.teamMember} key={teamData.id}>
                  <Typography variant="caption">{`${teamData.firstName} ${teamData.lastName}`}</Typography>
                  <Typography variant="caption">
                    {teamData.totalSelected}
                  </Typography>
                  <Typography variant="caption">
                    {teamData.totalOrder}
                  </Typography>
                  <Typography variant="caption">{teamData.hours}</Typography>
                </div>
              ))}
              <div className={classes.addMember}>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => openModal("addMember")}
                >
                  <AddIcon />
                  Add A Member
                </Button>
              </div>
            </motion.div>
          </Collapse>
        )}
      </TransitionGroup>
    </AnimatePresence>
  );
};
