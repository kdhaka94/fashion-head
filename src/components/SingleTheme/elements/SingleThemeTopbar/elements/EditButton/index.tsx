
import { Button } from "@components/common";
import {
    EditOutlined
} from "@mui/icons-material";
import { useHeadStore } from "@utils/zustand/store";

export const EditButton= () => {

  const {  currentModals, openModal} = useHeadStore();
  const isOpen = currentModals.includes("updateTheme");

  return (
    <Button  onClick={() => {openModal("updateTheme")}}
    disabled={isOpen} startIcon={<EditOutlined />}>Edit</Button>
   
  );
};
