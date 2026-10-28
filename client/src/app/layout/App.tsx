import { useState } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Box, Container, CssBaseline, Typography } from "@mui/material";
import NavBar from "./NavBar";
import AcxtivityDashboard from "../../features/activities/dashboard/AcxtivityDashboard";
import { useActivities } from "../../lib/hooks/useActivities";

function App() {
  const [selectedActivity, setSelectedActivity] = useState<
    Activity | undefined
  >(undefined);
  const [editMode, setEditMode] = useState(false);

  const { activities, isPending, error } = useActivities();

  // useEffect(() => {
  //   axios
  //     .get<Activity[]>("https://localhost:5001/api/activities")
  //     .then((response) => {
  //       setActivities(response.data);
  //     });

  //   return () => {};
  // }, []);

  const handleSelectActivity = (id: string) => {
    setSelectedActivity(activities!.find((x) => x.id === id));
  };

  const handleCancelSelectActivity = () => {
    setSelectedActivity(undefined);
  };

  const handleFormOpen = (id?: string) => {
    if (id) {
      handleSelectActivity(id);
    } else {
      handleCancelSelectActivity();
    }
    setEditMode(true);
  };

  const handleFormClose = () => {
    setEditMode(false);
  };

  // const handleSubmitForm = (activity: Activity) => {
  //   // if (activity.id) {
  //   //   setActivities(
  //   //     activities.map((x) => (x.id === activity.id ? activity : x)),
  //   //   );
  //   //   setSelectedActivity(activity);
  //   // } else {
  //   //   const newActivity = {
  //   //     ...activity,
  //   //     id: (activities.length + 1).toString(),
  //   //   };
  //   //   setActivities([...activities, newActivity]);
  //   //   setSelectedActivity(newActivity);
  //   // }
  //   console.log(activity);
  //   setEditMode(false);
  // };

  // const handleDeleteActivity = (id: string) => {
  //   // setActivities(activities.filter((x) => x.id !== id));
  //   // if (selectedActivity?.id === id) {
  //   //   handleCancelSelectActivity();
  //   // }
  //   console.log("Delete activity with id:", id);
  // };

  return (
    <Box sx={{ bgcolor: "#eeeeee", minHeight: "100vh" }}>
      <CssBaseline />
      <NavBar openForm={handleFormOpen} />
      <Container maxWidth="xl" sx={{ mt: 3 }}>
        {error ? (
          <Typography color="error">Error: {error.message}</Typography>
        ) : !activities || isPending ? (
          <Typography>Loading...</Typography>
        ) : (
          <AcxtivityDashboard
            activities={activities}
            selectedActivity={selectedActivity}
            onSelectActivity={handleSelectActivity}
            onCancelSelectActivity={handleCancelSelectActivity}
            editMode={editMode}
            onFormOpen={handleFormOpen}
            onFormClose={handleFormClose}
          />
        )}
      </Container>
    </Box>
  );
}

export default App;
