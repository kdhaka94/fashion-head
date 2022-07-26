import { Typography } from "@components/common";
import React from "react";
import classes from "./styles.module.css";

const tempData = [
  "Sed ut perspiciatis unde omnis iste natus ",
  "error sit voluptatem ",
  "voluptatem accusantium doloremque",
  "architecto beatae vitae dicta sunt ",
  "explicabo",
  "Perspiciatis unde omnis iste natus error sit ",
  "voluptatem",
  "voluptatem accusantium doloremque",
  "Sed ut perspiciatis unde omnis iste natus ",
  "architecto beatae vitae dicta sunt ",
  "explicabo",
  "voluptatem accusantium doloremque",
];

export const SingleThemeInfo = () => {
  return (
    <div className={classes.container}>
      <Heading text="Understand Ethnic Wear" />
      <SubHeading text="Types of cloths" />
      <SubHeading text="Price Range" />
      <SubHeadingList
        items={tempData}
        text="Rules while uploading the cloths"
      />
    </div>
  );
};

const Heading = ({
  text = "",
  subText = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,",
}) => {
  return (
    <div>
      <Typography color="#6e5916" variant="h3">
        {text}
      </Typography>
      <Typography color="#6e5916" variant="caption">
        {subText}
      </Typography>
    </div>
  );
};

const SubHeading = ({
  text = "",
  subText = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,",
}) => {
  return (
    <div>
      <Typography color="#6e5916" variant="h4">
        {text}
      </Typography>
      <Typography color="#6e5916" variant="caption">
        {subText}
      </Typography>
    </div>
  );
};

const SubHeadingList = ({ text = "", items = [""] }) => {
  return (
    <div>
      <Typography color="#6e5916" variant="h4">
        {text}
      </Typography>
      <ul className={classes.list}>
        {items.map((item) => (
          <li>
            <Typography color="#6e5916" variant="caption">
              {item}
            </Typography>
          </li>
        ))}
      </ul>
    </div>
  );
};
