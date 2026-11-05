import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Box, Container, CssBaseline } from "@mui/material";
import NavBar from "./NavBar";
import AcxtivityDashboard from "../../features/activities/dashboard/AcxtivityDashboard";
import { Outlet } from "react-router";

function App() {
  // const [selectedActivity, setSelectedActivity] = useState<
  //   Activity | undefined
  // >(undefined);
  // const [editMode, setEditMode] = useState(false);

  // const { activities, isPending, error } = useActivities();

  // useEffect(() => {
  //   axios
  //     .get<Activity[]>("https://localhost:5001/api/activities")
  //     .then((response) => {
  //       setActivities(response.data);
  //     });

  //   return () => {};
  // }, []);

  // const handleSelectActivity = (id: string) => {
  //   setSelectedActivity(activities!.find((x) => x.id === id));
  // };

  // const handleCancelSelectActivity = () => {
  //   setSelectedActivity(undefined);
  // };

  // const handleFormOpen = (id?: string) => {
  //   if (id) {
  //     handleSelectActivity(id);
  //   } else {
  //     handleCancelSelectActivity();
  //   }
  //   setEditMode(true);
  // };

  // const handleFormClose = () => {
  //   setEditMode(false);
  // };

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
      <NavBar />
      <Container maxWidth="xl" sx={{ mt: 3 }}>
        <Outlet />
      </Container>
    </Box>
  );
}

export default App;
