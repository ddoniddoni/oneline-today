import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { auth } from "../firebase";
import { useThemeStore } from "../store/themeStore";
import { Theme } from "../theme";

export const Layout = () => {
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  const toggleState = useThemeStore((state) => state.theme);
  const navigate = useNavigate();
  const onLogOut = async () => {
    const ok = confirm("정말 로그아웃 하시겠습니까?");
    if (ok) {
      await auth.signOut();
      navigate("/login");
    }
  };
  return (
    <Container>
      <Wrapper>
        <ThemeButton onClick={toggleTheme}>
          {toggleState === "Light" ? "Dark" : "Light"}
        </ThemeButton>
        <LogoutButton onClick={onLogOut}>Logout</LogoutButton>
        <Outlet />
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 720px;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
`;
const ThemeButton = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  right: 40px;
  bottom: 140px;
  border-radius: 50%;
  border: none;
  background-color: ${(props) => props.theme.color};
  color: ${(props) => props.theme.background};
  font-size: 16px;
  cursor: pointer;
`;
const LogoutButton = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  right: 40px;
  bottom: 40px;
  border-radius: 50%;
  border: none;
  background-color: ${(props) => props.theme.color};
  color: ${(props) => props.theme.background};
  font-size: 16px;
  cursor: pointer;
`;
