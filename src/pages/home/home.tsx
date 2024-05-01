import styled from "styled-components";
import { Timeline } from "../../components/timeline";
import { User } from "../../components/user";
import { PostTodayForm } from "../../components/post-today-form";

export const Home = () => {
  return (
    <Container>
      <User />
      <Timeline />
      <PostTodayForm />
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: center;
`;
