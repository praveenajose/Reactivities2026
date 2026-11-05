import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import agent from "../api/agent";

export const useActivities = (id?: string) => {
  const queryClient = useQueryClient();

  const {
    data: activities,
    isPending,
    error,
  } = useQuery({
    queryKey: ["activities"],
    queryFn: async () => {
      const response = await agent.get<Activity[]>("/activities");
      if (response.status === 404) throw new Error("Activities not found");
      if (response.status !== 200) throw new Error("Failed to fetch repo data");
      return response.data;
    },
  });

  const { data: activity, isLoading: isActivityLoading } = useQuery({
    queryKey: ["activity", id],
    queryFn: async () => {
      const response = await agent.get<Activity>(`/activities/${id}`);
      if (response.status === 404) throw new Error("Activity not found");
      if (response.status !== 200)
        throw new Error("Failed to fetch activity data");
      return response.data;
    },
    enabled: !!id, // Only run this query if an id is provided
  });

  const updateActivity = useMutation({
    mutationFn: async (activity: Activity) => {
      await agent.put("/activities", activity);
    },
    onSuccess: async () => {
      // invalidate the query to refetch the activities after a successful update
      await queryClient.invalidateQueries({ queryKey: ["activities"] });
    },
  });

  const createActivity = useMutation({
    mutationFn: async (activity: Activity) => {
      const response = await agent.post("/activities", activity);
      return response.data;
    },
    onSuccess: async () => {
      // invalidate the query to refetch the activities after a successful update
      await queryClient.invalidateQueries({ queryKey: ["activities"] });
    },
  });

  const deleteActivity = useMutation({
    mutationFn: async (id: string) => {
      await agent.delete(`/activities/${id}`);
    },
    onSuccess: async () => {
      // invalidate the query to refetch the activities after a successful update
      await queryClient.invalidateQueries({ queryKey: ["activities"] });
    },
  });

  return {
    activities,
    isPending,
    error,
    createActivity,
    updateActivity,
    deleteActivity,
    activity,
    isActivityLoading,
  };
};
