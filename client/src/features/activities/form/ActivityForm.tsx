import { Box, Paper, TextField, Typography, Button } from "@mui/material";
import { useActivities } from "../../../lib/hooks/useActivities";

const today = new Date().toISOString().split("T")[0];

type Props = {
  activity?: Activity;
  onFormClose: () => void;
};

export default function ActivityForm({ activity, onFormClose }: Props) {
  // Use the useActivities hook to access the updateActivity mutation
  const { createActivity, updateActivity } = useActivities();

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
      onFormClose(); // Close the form after successful submission
    } else {
      await createActivity.mutateAsync(data as unknown as Activity);
      onFormClose();
    }
  };
  return (
    <Paper sx={{ borderRadius: 3, p: 3 }}>
      <Typography variant="h5" gutterBottom color="primary" sx={{ pb: 1 }}>
        {activity?.id ? "Update Activity" : "Create Activity"}
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
          <Button onClick={onFormClose} color="inherit">
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
