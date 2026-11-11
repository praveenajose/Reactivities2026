import Group from "@mui/icons-material/Group";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Container,
  LinearProgress,
} from "@mui/material";
import { NavLink } from "react-router";
import MenuItemLink from "../shared/components/MenuItemLink";
import { useStore } from "../../lib/hooks/useStore";
import { Observer } from "mobx-react-lite";

export default function NavBar() {
  const { uiStore } = useStore();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="relative"
        sx={{
          backgroundImage:
            "linear-gradient(135deg, #182a73 0%, #218aae 69%, #20a7ac 89%)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <Container
                component={NavLink}
                to="/"
                sx={{
                  display: "flex",
                  gap: 2,
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                <Group fontSize="large" />
                <Typography
                  variant="h4"
                  color="inherit"
                  sx={{ fontWeight: "bold" }}
                >
                  Reactivities
                </Typography>
              </Container>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Box>
                <MenuItemLink to="/activities">Activities</MenuItemLink>
              </Box>
              <Box>
                <MenuItemLink to="/createActivity">
                  Create Activity
                </MenuItemLink>
              </Box>
              <Box>
                <MenuItemLink to="/counter">Counter</MenuItemLink>
              </Box>
              <Box>
                <MenuItemLink to="/errors">Errors</MenuItemLink>
              </Box>
            </Box>
            User Menu
          </Toolbar>
        </Container>
        <Observer>
          {() =>
            uiStore.isLoading ? (
              <LinearProgress
                color="secondary"
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: "0",
                  height: 4,
                }}
              />
            ) : null
          }
        </Observer>
      </AppBar>
    </Box>
  );
}
