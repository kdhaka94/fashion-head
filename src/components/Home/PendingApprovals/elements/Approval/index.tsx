import { Button, Image } from "../../../../common";
import classes from "./styles.module.css";

export const Approval = ({
  productImg = "https://mui.com/static/images/avatar/1.jpg",
}) => {
  return (
    <div className={classes.container}>
      <Image
        width={41}
        height={41}
        className={classes.productImg}
        src={productImg}
      />
      <Button variant="outlined">Review</Button>
    </div>
  );
};
