import { useState } from "react";
import styled from "styled-components";
import { auth, db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

const getDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = ("0" + (today.getMonth() + 1)).slice(-2);
  const day = ("0" + today.getDate()).slice(-2);
  return year + "." + month + "." + day;
};

export const PostTodayForm = () => {
  const [text, setText] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (!user || text === "" || text.length > 45) return;
    try {
      await addDoc(collection(db, "todays"), {
        today: text,
        date: getDate(),
        userId: user.uid,
      });
      setText("");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Container onSubmit={onSubmit}>
      <Input value={text} onChange={onChange} maxLength={45} />
      <SendButton>기록</SendButton>
    </Container>
  );
};
const Container = styled.form`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 700px;
  height: 80px;
  bottom: 20px;
  border-radius: 15px;
  background-color: ${(props) => props.theme.color};
  padding: 15px;
`;
const Input = styled.input`
  width: 100%;
  border-radius: 15px;
  border: 2px solid #135575;
  font-size: 16px;
  &:focus {
    outline: none;
  }
`;
const SendButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  border: none;
  margin-left: 10px;
  background-color: #135575;
  color: #f1f1f1;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;
