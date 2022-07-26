import { Typography } from "@components/common";
import React from "react";
import classes from "./styles.module.css";

// TODO: change to data from api
const tempData = [
  {
    name: "A",
    selection: 90,
    order: 20,
  },
  {
    name: "B",
    selection: 90,
    order: 20,
  },
  {
    name: "C",
    selection: 90,
    order: 20,
  },
];

export const TeamDataTable = ({ teams = tempData }) => {
  return (
    <table className={classes.container}>
      <TableHead />
      {teams.map((team) => (
        <TableRow team={team} />
      ))}
      <TableFooter selection={45} order={90} />
    </table>
  );
};

const TableHead = () => (
  <tr>
    <td>
      <Typography variant="h3">Team</Typography>
    </td>
    <td>
      <Typography variant="h3">Selections</Typography>
    </td>
    <td>
      <Typography variant="h3">Orders</Typography>
    </td>
  </tr>
);

const TableRow = ({
  team,
}: {
  team: { name: string; selection: number; order: number };
}) => (
  <tr>
    <td>
      <Typography>Team {team.name}</Typography>
    </td>
    <td>
      <Typography>{team.selection}</Typography>
    </td>
    <td>
      <Typography>{team.order}</Typography>
    </td>
  </tr>
);

const TableFooter = ({
  selection,
  order,
}: {
  selection: number;
  order: number;
}) => {
  return (
    <tr className={classes.footerRow}>
      <td align="center">
        <div className={classes.centerlize}>
          <Typography variant="h3" align="left">
            Overall
            <br />
            Performance
          </Typography>
        </div>
      </td>
      <td>
        <Typography variant="caption">Selection</Typography> <br />
        <Typography variant="h2">{selection}</Typography>
      </td>
      <td>
        <Typography variant="caption">Order</Typography> <br />
        <Typography variant="h2">{order}</Typography>
      </td>
    </tr>
  );
};
