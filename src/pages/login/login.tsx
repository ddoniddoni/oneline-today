import styled from "styled-components";
import { GoogleButton } from "../../components/google-btn";

export const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Log Into 😊</Title>
        <Switcher>Social Login</Switcher>
        <GoogleButton />
      </Wrapper>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #111014;
  color: #ffffff;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 420px;
  height: 400px;
`;

const Title = styled.h1`
  font-size: 42px;
`;

const Switcher = styled.span`
  margin-top: 20px;
  a {
    color: #1d9bf0;
  }
`;
