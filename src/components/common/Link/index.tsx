import classes from "./styles.module.css";

type IProps = {
  children?: any;
  href?: string;
  variant?: "primary" | "secondary";
};

export const Link = ({
  href = "#",
  children,
  variant = "primary",
  ...rest
}: IProps) => {
  return (
    <a href={href} {...rest} className={classes.link}>
      {children}
    </a>
  );
};
