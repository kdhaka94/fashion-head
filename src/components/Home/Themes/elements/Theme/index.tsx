import { Image, Typography } from "@components/common";
import { ThemeDataEntity } from "@data/themes/types";
import { MotionProps, motion } from "framer-motion";
import React from "react";
import classes from "./styles.module.css";
type IProps = {
  theme: ThemeDataEntity;
} & MotionProps;

export const Theme = ({ theme, ...rest }: IProps) => {
  return (
    <motion.div className={classes.container} {...rest}>
      <Image
        width={88}
        height={88}
        className={classes.productImg}
        src={theme.theme.images![0]}
      />
      <div className={classes.infoContainer}>
        <Typography variant="body1" title={theme.theme.title}>
          {theme.theme.title && theme.theme.title.length < 16
            ? theme.theme.title
            : theme.theme.title.slice(0, 15) + "..."}
        </Typography>
        <div className={classes.selectionOrderContainer}>
          <div>
            <Typography variant="body2">Selection</Typography>
            <Typography variant="h3">{theme.total}</Typography>
          </div>
          <div>
            <Typography variant="body2">Order</Typography>
            <Typography variant="h3">{theme.order}</Typography>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
