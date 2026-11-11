import { SearchOff } from "@mui/icons-material";
import { Box, Button, Paper, Typography } from "@mui/material";
import { Link } from "react-router";

export default function NotFound() {
  return (
    <Paper
      sx={{
        height: 400,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        p: 6,
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <SearchOff sx={{ fontSize: 100 }} color="primary" />
        <Typography gutterBottom variant="h3">
          Oops - we couldn't find what you are looking for
        </Typography>
      </Box>

      <Button fullWidth component={Link} to="/activities">
        Return to activities page
      </Button>
    </Paper>
  );
}
