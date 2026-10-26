import { Box, Paper, TextField, Typography, Button } from "@mui/material";

type Props = {
  activity?: Activity;
  onFormClose: () => void;
  onSubmit: (activity: Activity) => void;
};

export default function ActivityForm({
  activity,
  onFormClose,
  onSubmit,
}: Props) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
    const formData = new FormData(event.currentTarget);
    const data: { [key: string]: string } = {};
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    if (activity) {
      data.id = activity.id;
    }
    onSubmit(data as unknown as Activity);
  };
  return (
    <Paper sx={{ borderRadius: 3, p: 3 }}>
      <Typography variant="h5" gutterBottom color="primary">
        Create Activity
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
          defaultValue={activity?.date}
        />
        <TextField
          label="City"
          name="city"
          variant="outlined"
          fullWidth
          defaultValue={activity?.city}
        />
        <TextField label="Venue" variant="outlined" fullWidth />
        <Box sx={{ display: "flex", justifyContent: "end", gap: 3 }}>
          <Button onClick={onFormClose} color="inherit">
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="success">
            Submit
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}
