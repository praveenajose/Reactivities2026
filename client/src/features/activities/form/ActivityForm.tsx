import { Box, Paper, TextField, Typography, Button } from "@mui/material";
import { useActivities } from "../../../lib/hooks/useActivities";
import { useNavigate, useParams } from "react-router";

const today = new Date().toISOString().split("T")[0];

export default function ActivityForm() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  // Use the useActivities hook to access the updateActivity mutation
  const { createActivity, updateActivity, activity, isActivityLoading } =
    useActivities(id);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Handle form submission logic here
    const formData = new FormData(event.currentTarget);
    const data: { [key: string]: string } = {};
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    //console.log(activity);

    if (activity) {
      data.id = activity.id;
      await updateActivity.mutateAsync(data as unknown as Activity); // Call the updateActivity mutation
      navigate(`/activities/${activity.id}`); // Navigate to the activity details page after updating
    } else {
      createActivity.mutateAsync(data as unknown as Activity, {
        onSuccess: (id) => {
          navigate(`/activities/${id}`); // Navigate to the activity details page after creating
        },
      }); // Call the createActivity mutation
    }
  };

  if (isActivityLoading) return <Typography>Loading...</Typography>;

  return (
    <Paper sx={{ borderRadius: 3, p: 3 }}>
      <Typography variant="h5" gutterBottom color="primary" sx={{ pb: 1 }}>
        {activity?.id ? "Edit Activity" : "Create Activity"}
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "flex", flexDirection: "column", gap: 3 }}
      >
        <TextField
          label="Title"
          name="title"
          variant="outlined"
          fullWidth
          defaultValue={activity?.title}
        />
        <TextField
          label="Description"
          name="description"
          variant="outlined"
          fullWidth
          multiline
          rows={3}
          defaultValue={activity?.description}
        />
        <TextField
          label="Category"
          name="category"
          variant="outlined"
          fullWidth
          defaultValue={activity?.category}
        />
        <TextField
          label="Date"
          name="date"
          variant="outlined"
          fullWidth
          type="date"
          defaultValue={
            activity?.date
              ? new Date(activity.date).toISOString().split("T")[0]
              : today
          }
        />
        <TextField
          label="City"
          name="city"
          variant="outlined"
          fullWidth
          defaultValue={activity?.city}
        />
        <TextField
          label="Venue"
          name="venue"
          variant="outlined"
          fullWidth
          defaultValue={activity?.venue}
        />
        <Box sx={{ display: "flex", justifyContent: "end", gap: 3 }}>
          <Button color="inherit" onClick={() => navigate("/activities")}>
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="success"
            disabled={createActivity.isPending || updateActivity.isPending}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}
