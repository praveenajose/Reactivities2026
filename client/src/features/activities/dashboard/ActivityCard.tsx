import {
  CardActions,
  CardContent,
  Chip,
  Typography,
  Button,
  Box,
} from "@mui/material";
import Card from "@mui/material/Card";

type Props = {
  activity: Activity;
  onSelectActivity: (id: string) => void;
  onDeleteActivity: (id: string) => void;
};

export default function ActivityCard({
  activity,
  onSelectActivity,
  onDeleteActivity,
}: Props) {
  return (
    <Card sx={{ borderRadius: 2, boxShadow: 3, mb: 2 }}>
      <CardContent>
        <Typography variant="h5">{activity.title}</Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {activity.date}
        </Typography>
        <Typography variant="body2">{activity.description}</Typography>
        <Typography variant="subtitle1">
          {activity.city} / {activity.venue}
        </Typography>
      </CardContent>
      <CardActions
        sx={{ display: "flex", justifyContent: "space-between", pb: 2 }}
      >
        <Chip label={activity.category} variant="outlined" />
        <Box sx={{ display: "flex", gap: 3 }}>
          <Button
            size="medium"
            variant="contained"
            onClick={() => onSelectActivity(activity.id)}
          >
            View
          </Button>

          <Button
            size="medium"
            color="error"
            variant="contained"
            onClick={() => onDeleteActivity(activity.id)}
          >
            Delete
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
}
