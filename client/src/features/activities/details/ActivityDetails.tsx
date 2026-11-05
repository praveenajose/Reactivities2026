import {
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Card from "@mui/material/Card";
import { useNavigate, useParams } from "react-router";
import { useActivities } from "../../../lib/hooks/useActivities";

export default function ActivityDetails() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { activity, isActivityLoading } = useActivities(id);

  if (isActivityLoading) return <Typography>Loading...</Typography>;
  if (!activity) return <Typography>Activity not found</Typography>;

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
        <Button component="a" href={`/manage/${activity.id}`} color="primary">
          Edit
        </Button>
        <Button color="inherit" onClick={() => navigate("/activities")}>
          Cancel
        </Button>
      </CardActions>
    </Card>
  );
}
