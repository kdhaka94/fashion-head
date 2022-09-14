import { useThemesQuery } from "@data/themes/use-themes.query";
import React from "react";
import { Theme } from "../Theme";
import { ShowMoreTheme } from "../Theme/ShowMore";
import classes from "./styles.module.css";
import { AnimatePresence, motion } from "framer-motion";

const RANGE = 3;

export const ThemesContainer = () => {
  const [showMore, setShowMore] = React.useState(false);
  const { data } = useThemesQuery();

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <AnimatePresence>
      <motion.div
        className={classes.container}
        layout
        transition={{ duration: 1 }}
      >
        {data?.data?.slice(0, showMore ? Infinity : RANGE).map((theme) => (
          <Theme
          key={theme.theme._id}
            theme={theme}
            layoutId={theme.theme._id}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
          />
        ))}
        {data?.data && data?.data?.length > RANGE && (
          <ShowMoreTheme
            onClick={toggleShowMore}
            showMore={showMore}
            layoutId="showMore"
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
          />
        )}
      </motion.div>
    </AnimatePresence>
  );
};
