import React from "react";

type IProps = {} & React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

export const Image = (props: IProps) => {
  return <img {...props} />;
};
