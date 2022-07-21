import React from "react";
import classes from "./styles.module.css";
import {
  ClickAwayListener,
  IconButton,
  Modal as MuiModal,
  ModalUnstyledProps,
} from "@mui/material";
import { Close } from "@mui/icons-material";

type IProps = {
  children: React.ReactNode;
  onClose: (open: boolean) => void;
} & ModalUnstyledProps;

export const Modal = ({ children, onClose, ...rest }: IProps) => {
  const handleClose = () => {
    onClose(rest.open);
  };
  return (
    <MuiModal {...rest}>
      <ClickAwayListener onClickAway={handleClose}>
        <div className={classes.container}>
          {children}
          <div className={classes.closeIconContainer}>
            <IconButton onClick={handleClose}>
              <Close />
            </IconButton>
          </div>
        </div>
      </ClickAwayListener>
    </MuiModal>
  );
};
