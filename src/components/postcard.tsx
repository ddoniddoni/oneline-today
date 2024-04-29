import styled from "styled-components";

export const Postcard = () => {
  return (
    <>
      <Container>
        <DateText>2024.04.30</DateText>
        <PostText>안녕하세요</PostText>
      </Container>
      <Container>
        <DateText>2024.04.30</DateText>
        <PostText>안녕하세요</PostText>
      </Container>
      <Container>
        <DateText>2024.04.30</DateText>
        <PostText>안녕하세요</PostText>
      </Container>
      <Container>
        <DateText>2024.04.30</DateText>
        <PostText>안녕하세요 반갑습니다 테스트 중입니다.</PostText>
      </Container>
      <Container>
        <DateText>2024.04.30</DateText>
        <PostText>안녕하세요</PostText>
      </Container>
    </>
  );
};
const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100px;
`;
const DateText = styled.span`
  font-size: 14px;
`;
const PostText = styled.div`
  margin-top: 12px;
  font-size: 18px;
`;
