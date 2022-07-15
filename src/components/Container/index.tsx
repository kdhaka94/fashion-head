import classes from "./styles.module.css";

export const Container = ({
  children,
  bgColor = "white",
}: {
  children: React.ReactNode;
  bgColor?: string;
}) => {
  return (
    <div className={classes.container} style={{ backgroundColor: bgColor }}>
      {children}
    </div>
  );
};
