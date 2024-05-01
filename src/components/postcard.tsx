import styled from "styled-components";
import { IToday } from "./timeline";
import { auth, db } from "../firebase";
import { useEditStore } from "../store/editStore";
import { deleteDoc, doc } from "firebase/firestore";

export const Postcard = ({ today, date, userId, id }: IToday) => {
  const user = auth.currentUser;
  const onDelete = async () => {
    const ok = confirm("정말 삭제하시겠습니까?");
    if (!ok || user?.uid !== userId) return;
    try {
      await deleteDoc(doc(db, "todays", id));
    } catch (e) {
      console.log(e);
    }
  };
  const { edit } = useEditStore();
  return (
    <>
      <Container>
        <TextWrapper>
          <DateText>{date}</DateText>
          <PostText>{today}</PostText>
        </TextWrapper>
        {edit ? <DeleteButton onClick={onDelete}>삭제</DeleteButton> : ""}
      </Container>
    </>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100px;
  padding-left: 10px;
`;
const DateText = styled.span`
  font-size: 14px;
`;
const PostText = styled.div`
  margin-top: 12px;
  font-size: 18px;
`;
const DeleteButton = styled.button`
  font-weight: 600;
  border: 0;
  font-size: 8px;
  border-radius: 5px;
  cursor: pointer;
  width: 40px;
  height: 40px;
`;
