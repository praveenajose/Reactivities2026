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
  onSubmitForm: (activity: Activity) => void;
  onDeleteActivity: (id: string) => void;
};

export default function AcxtivityDashboard({
  activities,
  selectedActivity,
  onSelectActivity,
  onCancelSelectActivity,
  editMode,
  onFormOpen,
  onFormClose,
  onSubmitForm,
  onDeleteActivity,
}: Props) {
  return (
    <Grid container spacing={3}>
      <Grid size={7}>
        <ActivityList
          activities={activities}
          onSelectActivity={onSelectActivity}
          onDeleteActivity={onDeleteActivity}
        />
      </Grid>
      <Grid size={5}>
        {selectedActivity && !editMode && (
          <ActivityDetails
            activity={selectedActivity}
            onCancelSelectActivity={onCancelSelectActivity}
            onFormOpen={onFormOpen}
          />
        )}
        {editMode && (
          <ActivityForm
            onFormClose={onFormClose}
            activity={selectedActivity}
            onSubmit={onSubmitForm}
          />
        )}
      </Grid>
    </Grid>
  );
}
