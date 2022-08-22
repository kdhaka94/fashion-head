import { Typography } from "@components/common";
import { ThemesContainer } from "./elements/ThemesContainer";
import classes from "./styles.module.css";

export const Themes = () => {
  return (
    <div className={classes.container}>
      <div className={classes.subContainer}>
        <Typography variant="h2">Themes</Typography>
        <div className={classes.filtersContainer}>
          <Typography variant="caption">Filter by</Typography>
          
        </div>
      </div>
      <ThemesContainer />
    </div>
  );
};
