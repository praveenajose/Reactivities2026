import {
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Card from "@mui/material/Card";

type Props = {
  activity: Activity;
  onCancelSelectActivity: () => void;
  onFormOpen: (id: string) => void;
};

export default function ActivityDetails({
  activity,
  onCancelSelectActivity,
  onFormOpen,
}: Props) {
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
