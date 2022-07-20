import { Container } from "@components/Container";
import { Header } from "@components/Header";
import { PendingApprovals } from "@components/Home/PendingApprovals";
import { Teams } from "@components/Home/Teams";
import { Themes } from "@components/Home/Themes";

export const HomePage = () => {
  return (
    <Container bgColor="#f7faff">
      <Header />
      <div style={style}>
        <PendingApprovals />
        <Themes />
        <Teams />
      </div>
    </Container>
  );
};

const style: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "40px",
  padding: "0 60px",
};
