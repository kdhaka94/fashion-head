import { CloseRounded } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Button, Image, Typography } from "../../../../common";
import classes from "./styles.module.css";
import moment from "moment";
import { DATE_FORMAT } from "../../../../../utils/constants";

export const Approval = ({
  productImg = "https://mui.com/static/images/avatar/1.jpg",
  date = "22-12-2022",
  title = "The stock review is available for festive wear",
}) => {
  return (
    <div className={classes.container}>
      <div>
        <Image
          width={41}
          height={41}
          className={classes.productImg}
          src={productImg}
        />
        <Typography variant="caption">{title}</Typography>
      </div>
      <div>
        <Image src="/assets/images/calender-icon.webp" width={25} height={25} />
        <Typography variant="caption">
          {moment(date).format(DATE_FORMAT)}
        </Typography>
        <Button variant="outlined">Review</Button>
        <IconButton>
          <CloseRounded />
        </IconButton>
      </div>
    </div>
  );
};
