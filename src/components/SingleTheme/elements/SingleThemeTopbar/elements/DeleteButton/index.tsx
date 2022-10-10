import { Button } from "@components/common";
import {
    DeleteOutlineRounded
} from "@mui/icons-material";

export const DeleteButton = ({ themeName = "Ethnic Fashion Wear" }) => {
  return (
    
    <Button variant="outlined" startIcon={<DeleteOutlineRounded />}>
    Delete
  </Button>
     
  );
};
