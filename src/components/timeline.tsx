import styled from "styled-components";
import { Postcard } from "./postcard";
import { useEffect, useState } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { auth, db } from "../firebase";
import { Unsubscribe } from "firebase/auth";

export interface IToday {
  today: string;
  date: string;
  userId: string;
  id: string;
}

export const Timeline = () => {
  const user = auth.currentUser;
  const [todays, setToday] = useState<IToday[]>([]);
  useEffect(() => {
    let unsubscribe: Unsubscribe | null = null;
    const fetchTodays = () => {
      const todayRef = collection(db, "todays");
      const todayQuery = query(todayRef, where("userId", "==", user?.uid));
      unsubscribe = onSnapshot(todayQuery, (snapshot) => {
        const todays = snapshot.docs.map((doc) => {
          const { today, date, userId } = doc.data();
          return {
            today,
            date,
            userId,
            id: doc.id,
          };
        });
        setToday(todays);
      });
    };
    fetchTodays();
    return () => {
      unsubscribe && unsubscribe();
    };
  }, []);
  return (
    <Container>
      {todays.map((today) => (
        <Postcard key={today.id} {...today} />
      ))}
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  height: calc(90% - 150px);
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;
