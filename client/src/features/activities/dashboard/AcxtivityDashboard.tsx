import { Grid } from "@mui/material";
import ActivityList from "./ActivityList";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";

type Props = {
  activities: Activity[];
  selectedActivity?: Activity;
  onSelectActivity: (id: string) => void;
  onCancelSelectActivity: () => void;
  editMode: boolean;
  onFormOpen: (id?: string) => void;
  onFormClose: () => void;
};

export default function AcxtivityDashboard({
  activities,
  selectedActivity,
  onSelectActivity,
  onCancelSelectActivity,
  editMode,
  onFormOpen,
  onFormClose,
}: Props) {
  return (
    <Grid container spacing={3}>
      <Grid size={7}>
        <ActivityList
          activities={activities}
          onSelectActivity={onSelectActivity}
        />
      </Grid>
      <Grid size={5}>
        {selectedActivity && !editMode && (
          <ActivityDetails
            selectedActivity={selectedActivity}
            onCancelSelectActivity={onCancelSelectActivity}
            onFormOpen={onFormOpen}
          />
        )}
        {editMode && (
          <ActivityForm onFormClose={onFormClose} activity={selectedActivity} />
        )}
      </Grid>
    </Grid>
  );
}
