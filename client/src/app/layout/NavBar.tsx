import Group from "@mui/icons-material/Group";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
} from "@mui/material";

type Props = {
  openForm: () => void;
};

export default function NavBar({ openForm }: Props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundImage:
            "linear-gradient(135deg, #182a73 0%, #218aae 69%, #20a7ac 89%)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <Container sx={{ display: "flex", gap: 2 }}>
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
              <Container>
                <Typography
                  variant="h6"
                  color="inherit"
                  sx={{
                    fontsize: "1.25rem",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  }}
                >
                  Activities
                </Typography>
              </Container>
              <Container>
                <Typography
                  variant="h6"
                  color="inherit"
                  sx={{
                    fontsize: "1.25rem",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  }}
                >
                  About
                </Typography>
              </Container>
              <Container>
                <Typography
                  variant="h6"
                  color="inherit"
                  sx={{
                    fontsize: "1.25rem",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  }}
                >
                  Contact
                </Typography>
              </Container>
            </Box>
            <Button
              size="large"
              variant="contained"
              color="warning"
              onClick={openForm}
            >
              Create Activity
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
