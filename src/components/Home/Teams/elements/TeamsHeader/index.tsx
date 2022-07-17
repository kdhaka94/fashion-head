import { KeyboardArrowDownRounded } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import {} from "framer-motion";
import React from "react";
import { useTeamsPerformanceQuery } from "../../../../../data/teams/use-teamsPerformance.query";
import { Typography } from "../../../../common";
import classes from "./styles.module.css";

export const TeamsHeader = () => {
  const { data } = useTeamsPerformanceQuery();

  const [teams, setTeams] = React.useState({});

  // To transform the data to object form according to team names
  const getTeamByNames = React.useCallback(() => {
    return data?.data
      ? data?.data?.reduce((prev, curr) => {
          const newVal = {
            ...prev,
            [curr.team]:
              typeof (prev as any)[curr.team] === "undefined"
                ? [{ ...curr, isOpen: false }]
                : [...(prev as any)[curr.team], { ...curr, isOpen: false }],
          };
          return newVal;
        }, {})
      : {};
  }, [data]);

  React.useEffect(() => {
    setTeams(getTeamByNames()!!);
  }, [getTeamByNames]);

  return (
    <>
      {data?.data && (
        <div className={classes.container}>
          <div className={classes.subContainer} key={"head"}>
            <Typography variant="h3">Teams</Typography>
            <Typography variant="h3">Overall Performance</Typography>
          </div>
          {Object.keys(teams).map((name) => (
            <div className={classes.subContainer} key={name}>
              <Typography variant="h4">Team {name}</Typography>
              <Typography variant="h4">100/200</Typography>
              <div className={classes.buttonContainer}>
                <IconButton>
                  <KeyboardArrowDownRounded />
                </IconButton>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
