import styled from "styled-components";
import { auth } from "../firebase";

export const User = () => {
  const user = auth.currentUser;
  const avatar: string | undefined =
    user?.photoURL === null ? undefined : user?.photoURL;
  return (
    <Container>
      <img src={avatar} alt="Photo" />
      <h1>{user?.displayName}</h1>
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
