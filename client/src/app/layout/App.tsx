import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Box, Container, CssBaseline } from "@mui/material";
import NavBar from "./NavBar";
import { Outlet, useLocation } from "react-router";
import HomePage from "../../features/home/HomePage";

function App() {
  const location = useLocation();
  return (
    <Box sx={{ bgcolor: "#eeeeee", minHeight: "100vh" }}>
      <CssBaseline />
      {location.pathname === "/" ? (
        <HomePage />
      ) : (
        <>
          <NavBar />
          <Container maxWidth="xl" sx={{ mt: 3 }}>
            <Outlet />
          </Container>
        </>
      )}
    </Box>
  );
}

export default App;
