import { styled } from "styled-components";
import { Theme } from "../theme";

const Wrapper = styled.div<{ theme: Theme }>`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
`;

const Text = styled.span`
  font-size: 24px;
`;

export const LoadingScreen = () => {
  return (
    <Wrapper>
      <Text>Loading...</Text>
    </Wrapper>
  );
};
