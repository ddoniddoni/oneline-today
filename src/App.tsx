import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "./components/protectedRoute";
import { Layout } from "./components/layout";
import { Home } from "./pages/home/home";
import { Login } from "./pages/login/login";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import { LoadingScreen } from "./components/loading-screen";
import { useThemeStore } from "./store/themeStore";
import { darkTheme, lightTheme } from "./theme";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const GlobalStyles = createGlobalStyle`
${reset};
* {
  box-sizing: border-box;
}
body {
  font-family: "Jua", sans-serif;
}
::-webkit-scrollbar {
  display:none;
}
`;
export const App = () => {
  const [isLoading, setLoading] = useState(true);
  const { theme } = useThemeStore();
  const currentTheme = theme === "Light" ? lightTheme : darkTheme;
  const init = async () => {
    await auth.authStateReady();
    setLoading(false);
  };
  useEffect(() => {
    init();
  }, []);
  return (
    <>
      <Wrapper>
        <ThemeProvider theme={currentTheme}>
          <GlobalStyles />
          {isLoading ? <LoadingScreen /> : <RouterProvider router={router} />}
        </ThemeProvider>
      </Wrapper>
    </>
  );
};
