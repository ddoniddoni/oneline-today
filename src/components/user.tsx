import styled from "styled-components";
import { userStore } from "../store/userStore";

export const User = () => {
  const { user } = userStore();
  const avatar: string | undefined =
    user.profileUrl === null ? undefined : user.profileUrl;
  return (
    <Container>
      <img src={avatar} alt="Photo" />
      <h1>{user.name}</h1>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 10%;
  width: 100%;
  img {
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
  h1 {
    margin-left: 20px;
  }
`;
