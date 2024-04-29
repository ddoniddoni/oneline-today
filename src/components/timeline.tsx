import styled from "styled-components";
import { Postcard } from "./postcard";

export const Timeline = () => {
  return (
    <Container>
      <Postcard />
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
