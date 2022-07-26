import { Button, Typography } from "@components/common";
import {
  DeleteOutlineRounded,
  DeleteRounded,
  EditOutlined,
} from "@mui/icons-material";
import classes from "./styles.module.css";

export const SingleThemeTopbar = ({ themeName = "Ethnic Fashion Wear" }) => {
  return (
    <div className={classes.container}>
      <Typography variant="h2">{themeName}</Typography>
      <div className={classes.buttonsContainer}>
        <Button startIcon={<EditOutlined />}>Edit</Button>
        <Button variant="outlined" startIcon={<DeleteOutlineRounded />}>
          Delete
        </Button>
      </div>
      
    </div>
  );
};
