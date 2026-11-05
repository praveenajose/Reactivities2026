import { Grid } from "@mui/material";
import ActivityList from "./ActivityList";

export default function AcxtivityDashboard() {
  return (
    <Grid container spacing={3}>
      <Grid size={7}>
        <ActivityList />
      </Grid>
      <Grid size={5}>Activity Filters go here</Grid>
    </Grid>
  );
}
