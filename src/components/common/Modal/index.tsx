import { Close } from "@mui/icons-material";
import {
  ClickAwayListener,
  IconButton,
  Modal as MuiModal,
  ModalUnstyledProps
} from "@mui/material";
import React from "react";
import classes from "./styles.module.css";

const SIZES = {
  small: "600px",
  standard: "800px",
  fullWidth: "100%",
};

interface IProps
  extends Omit<ModalUnstyledProps, "onClose" | "size" | "children"> {
  onClose: (open: boolean) => void;
  size?: "small" | "standard" | "fullWidth";
  children: JSX.Element | JSX.Element[];
}

export const Modal = ({
  children,
  onClose,
  size = "standard",
  ...rest
}: IProps) => {
  const handleClose = () => {
    onClose(rest.open);
  };
  return (
    <MuiModal {...rest}>
      <ClickAwayListener onClickAway={handleClose}>
        <div className={classes.container} style={{ width: SIZES[size] }}>
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

export const ModalBody = ({ children }: { children: React.ReactNode }) => (
  <>
    <div className={classes.modalBody}>{children}</div>
  </>
);

export const ModalActions = ({ children }: { children: React.ReactNode }) => (
  <>
    <div className={classes.modalActions}>{children}</div>
  </>
);
