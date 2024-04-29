import styled from "styled-components";
import { Timeline } from "../../components/timeline";
import { User } from "../../components/user";

export const Home = () => {
  return (
    <Container>
      <User />
      <Timeline />
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
