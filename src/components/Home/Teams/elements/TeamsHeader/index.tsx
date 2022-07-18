import React from "react";
import { useTeamsPerformanceQuery } from "@data/teams/use-teamsPerformance.query";
import { Typography } from "@components/common";
import { TeamContainer } from "../TeamContainer";
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
            [curr.team]: {
              info:
                typeof (prev as any)[curr.team] === "undefined"
                  ? [curr]
                  : [...(prev as any)[curr.team].info, curr],
              isOpen: false,
            },
          };
          return newVal;
        }, {})
      : {};
  }, [data]);

  React.useEffect(() => {
    setTeams(getTeamByNames()!!);
  }, [getTeamByNames]);

  const toggleShowTeam = (team: any) => {
    setTeams({
      ...teams,
      [team]: {
        ...(teams as any)[team],
        isOpen: !(teams as any)[team].isOpen,
      },
    });
  };

  return (
    <>
      {data?.data && (
        <div className={classes.container}>
          <div className={classes.subContainer} key={"head"}>
            <Typography variant="h3">Teams</Typography>
            <Typography variant="h3">Overall Performance</Typography>
          </div>
          {Object.keys(teams).map((name) => (
            <TeamContainer
              name={name}
              key={name}
              toggleShowTeam={toggleShowTeam}
              team={(teams as any)[name]}
            />
          ))}
        </div>
      )}
    </>
  );
};
