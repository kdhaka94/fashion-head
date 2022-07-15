import { Container } from "../components/Container";
import { Header } from "../components/Header";
import { PendingApprovals } from "../components/Home/PendingApprovals";

export const HomePage = () => {
  return (
    <Container bgColor="#f7faff">
      <Header />
      <PendingApprovals />
    </Container>
  );
};
