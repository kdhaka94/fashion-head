import { Typography } from "@components/common";
import {
  KeyboardArrowDownRounded,
  KeyboardArrowUpRounded,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { MotionProps, motion } from "framer-motion";
import classes from "./styles.module.css";

type IProps = {
  onClick: () => void;
  showMore: boolean;
} & MotionProps;

export const ShowMoreTheme = ({ onClick, showMore, ...rest }: IProps) => {
  return (
    <motion.div
      className={classes.showMoreContainer}
      onClick={onClick}
      {...rest}
    >
      <Typography variant="h2" align="center">
        Show {!showMore ? "More" : "Less"}
      </Typography>
      <IconButton color="primary">
        {!showMore ? <KeyboardArrowDownRounded /> : <KeyboardArrowUpRounded />}
      </IconButton>
    </motion.div>
  );
};
