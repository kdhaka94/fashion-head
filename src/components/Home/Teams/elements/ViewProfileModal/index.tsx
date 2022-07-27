import { Button, Image, Typography } from "@components/common";
import { Modal, ModalActions, ModalBody } from "@components/common/Modal";
import React from "react";
import classes from "./styles.module.css";

export const ViewProfileModal = ({
  profileImage = "https://mui.com/static/images/avatar/1.jpg",
  username = "Kuldeep Dhaka",
  email = "kdhaka94@gmail.com",
  phoneNumber = "+919509605119",
}) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <ModalBody>
        <div className={classes.container}>
          <div className={classes.justifyCenter}>
            <Image
              width={135}
              height={135}
              src={profileImage}
              className={classes.profileImage}
            />
            <Typography variant="h2">{username}</Typography>
          </div>
          <div className={classes.userInfoContainer}>
            <div>
              <Image
                width={28}
                height={28}
                src="/assets/images/mail-icon.webp"
              />
              <Typography variant="h4">{email}</Typography>
            </div>
            <div>
              <Image
                width={28}
                height={28}
                src="/assets/images/phone-icon.webp"
              />
              <Typography variant="h4">{phoneNumber}</Typography>
            </div>
          </div>
          <div className={classes.justifyCenter}>
            <div className={classes.orderInfoContainer}>
              <div>
                <Typography align="center" variant="h4">
                  Selections
                </Typography>
                <Typography align="center" variant="h3">
                  45
                </Typography>
              </div>
              <div>
                <Typography align="center" variant="h4">
                  Orders
                </Typography>
                <Typography align="center" variant="h3">
                  45
                </Typography>
              </div>
              <div>
                <Typography align="center" variant="h4">
                  Work Hours
                </Typography>
                <Typography align="center" variant="h3">
                  45
                </Typography>
              </div>
            </div>
          </div>
          <div className={classes.justifyCenter}>
            <div className={classes.subTextContainer}>
              <Typography variant="body2" align="center">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                ndustry rem Ipsum has been the industry's standard dummy text
                eve type and scrambled it to make a type specimen book.
              </Typography>
            </div>
          </div>
        </div>
      </ModalBody>
      <ModalActions>
        <div className={classes.justifyCenter}>
          <Button>Save</Button>
        </div>
      </ModalActions>
    </Modal>
  );
};
