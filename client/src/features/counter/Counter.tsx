import Typography from "@mui/material/Typography";
import { observer } from "mobx-react-lite";
import { useStore } from "../../lib/hooks/useStore";
import {
  Box,
  Button,
  ButtonGroup,
  List,
  ListItem,
  ListItemText,
  Paper,
} from "@mui/material";

const Counter = observer(function Counter() {
  const { counterStore } = useStore();

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box
        sx={{
          width: "60%",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          mr: 2,
        }}
      >
        <Typography variant="h4" gutterBottom>
          {counterStore.title}
        </Typography>
        <Typography variant="h6">Count: {counterStore.count}</Typography>

        <ButtonGroup sx={{ mt: 3 }}>
          <Button
            onClick={() => counterStore.decrement(1)}
            variant="contained"
            color="secondary"
          >
            Decrement
          </Button>
          <Button
            onClick={() => counterStore.increment(1)}
            variant="contained"
            color="primary"
          >
            Increment
          </Button>
          <Button
            onClick={() => counterStore.increment(5)}
            variant="contained"
            color="success"
          >
            Increment by 5
          </Button>
        </ButtonGroup>
      </Box>
      <Paper sx={{ width: "40%", p: 2, overflowY: "auto" }}>
        <Typography variant="h5" gutterBottom sx={{ p: 2 }}>
          Conter events ({counterStore.getEventCount()}):
        </Typography>
        <List>
          {counterStore.events.map((event, index) => (
            <ListItem key={index}>
              <ListItemText primary={event} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
});

export default Counter;
