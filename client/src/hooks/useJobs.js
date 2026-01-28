import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

export const useJobs = () => {
    return useQuery({
        queryKey: ["jobs"],
        queryFn: async () => {
            const { data } = await api.get("/user/getJobs");
            return data.result || []; // Adapt based on API response structure
        },
        staleTime: 1000 * 60 * 5, // 5 minutes
    });
};
