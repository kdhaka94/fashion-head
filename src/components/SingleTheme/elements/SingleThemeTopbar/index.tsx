import { Typography } from "@components/common";
import { DeleteButton } from './elements/DeleteButton/index';
import { EditButton } from './elements/EditButton/index';

import classes from "./styles.module.css";

export const SingleThemeTopbar = ({ themeName = "Ethnic Fashion Wear" }) => {
  return (
    <div className={classes.container}>
      <Typography variant="h2">{themeName}</Typography>
      <div className={classes.buttonsContainer}>
       <EditButton/>
      <DeleteButton/>
      </div>
      
    </div>
  );
};
