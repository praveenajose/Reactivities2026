import {
  CardContent,
  Chip,
  Typography,
  Button,
  Box,
  CardHeader,
  Avatar,
  Link,
  Divider,
} from "@mui/material";
import Card from "@mui/material/Card";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PlaceIcon from "@mui/icons-material/Place";
import { formatDate } from "../../../lib/util/util";

type Props = {
  activity: Activity;
};

export default function ActivityCard({ activity }: Props) {
  const isHost = false;
  const isGoing = false;
  const label = isHost
    ? "You are hosting this activity"
    : "You are going to this activity";
  const isCancelled = false;
  const color = isHost ? "secondary" : isGoing ? "warning" : "default";

  return (
    <Card elevation={3} sx={{ borderRadius: 3 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <CardHeader
          avatar={<Avatar sx={{ height: 80, width: 80 }} />}
          title={activity.title}
          titletypographyprops={{ fontSize: 20, fontWeight: "bold" }}
          subheader={
            <>
              Hoisted by <Link href={`/profiles/bob`}>bob</Link>{" "}
            </>
          }
        />
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mr: 2 }}>
          {(isHost || isGoing) && (
            <Chip label={label} color={color} sx={{ borderRadius: 2 }} />
          )}
          {isCancelled && (
            <Chip label="Cancelled" color="error" sx={{ borderRadius: 2 }} />
          )}
        </Box>
      </Box>
      <Divider sx={{ mb: 3 }} />
      <CardContent sx={{ p: 0 }}>
        <Box sx={{ display: "flex", alignItems: "center", px: 2, mb: 2 }}>
          <Box sx={{ display: "flex", flexGrow: 0, alignItems: "center" }}>
            <AccessTimeIcon sx={{ mr: 1 }} />
            <Typography variant="body2" noWrap>
              {formatDate(activity.date)}
            </Typography>
          </Box>

          <PlaceIcon sx={{ ml: 3, mr: 1 }} />
          <Typography variant="body2">{activity.venue}</Typography>
        </Box>
        <Divider />
        <Box
          sx={{
            display: "flex",
            gap: 2,
            backgroundColor: "grey.200",
            py: 3,
            pl: 3,
          }}
        >
          Attendies goes here
        </Box>
      </CardContent>
      <CardContent sx={{ pb: 2 }}>
        <Typography variant="body2">{activity.description}</Typography>

        <Button
          size="medium"
          variant="contained"
          component="a"
          href={`/activities/${activity.id}`}
          sx={{ display: "flex", justifySelf: "self-end", borderRadius: 3 }}
        >
          View
        </Button>
      </CardContent>
    </Card>
  );
}
