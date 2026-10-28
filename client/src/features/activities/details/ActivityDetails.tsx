import {
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Card from "@mui/material/Card";
import { useActivities } from "../../../lib/hooks/useActivities";

type Props = {
  selectedActivity: Activity;
  onCancelSelectActivity: () => void;
  onFormOpen: (id: string) => void;
};

export default function ActivityDetails({
  selectedActivity,
  onCancelSelectActivity,
  onFormOpen,
}: Props) {
  const { activities } = useActivities();
  const activity = activities?.find(x => x.id === selectedActivity.id);

  if(!activity) return (
    <Typography>Loading...</Typography>
  )

  return (
    <Card sx={{ borderRadius: 2, boxShadow: 3, mb: 2 }}>
      <CardMedia
        component="img"
        src={`/images/categoryImages/${activity.category}.jpg`}
      />
      <CardContent>
        <Typography variant="h5">{activity.title}</Typography>
        <Typography variant="subtitle1" sx={{ fontWeight: "light" }}>
          {activity.date}
        </Typography>
        <Typography variant="body1">{activity.description}</Typography>
      </CardContent>
      <CardActions>
        <Button color="primary" onClick={() => onFormOpen(activity.id)}>
          Edit
        </Button>
        <Button color="inherit" onClick={onCancelSelectActivity}>
          Cancel
        </Button>
      </CardActions>
    </Card>
  );
}
