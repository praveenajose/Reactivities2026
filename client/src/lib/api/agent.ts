import axios from "axios";
import { store } from "../stores/store";
import { toast } from "react-toastify";
import { router } from "../../app/router/Routes";

const sleep = (delay: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

const agent = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "https://localhost:5001/api",
  headers: {
    "Content-Type": "application/json",
  },
});

agent.interceptors.request.use((config) => {
  store.uiStore.isBusy();
  return config;
});

agent.interceptors.response.use(
  // Try catch will not work here
  async (response) => {
    await sleep(1000); // Simulate network delay
    store.uiStore.isIdle();
    return response;
  },
  async (error) => {
    await sleep(1000); // Simulate network delay
    store.uiStore.isIdle();
    console.error("Axios interceptor error:", error.response);

    const { status, data } = error.response;
    switch (status) {
      case 400:
        if (data.errors) {
          const modeStateErrors = [];
          for (const key in data.errors) {
            if (data.errors[key]) {
              modeStateErrors.push(data.errors[key]);
            }
          }
          throw modeStateErrors.flat();
        } else {
          toast.error(data);
        }
        break;
      case 401:
        toast.error("Unauthorized");
        break;
      case 404:
        //toast.error("Not Found");
        router.navigate("/not-found");
        break;
      case 500:
        //toast.error("Server error");
        router.navigate("/server-error", {state : {error: data}});
        break;
      default:
        toast.error("Error");
        break;
    }
    return Promise.reject(error);
  },
);

export default agent;
