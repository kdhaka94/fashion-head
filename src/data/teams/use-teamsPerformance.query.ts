import { useQuery } from "react-query";
import { CoreApi } from "@utils/api/core-api";
import { API_ENDPOINTS } from "@utils/api/endpoints";
import { TeamsPerformance } from "./types";

const TeamsPerformancesService = new CoreApi("");

export const fetchTeamsPerformance = async () => {
  const { data } = await TeamsPerformancesService.http.get(
    API_ENDPOINTS.TEAMS_PERFORMANCE
  );
  return data as TeamsPerformance;
};

export const useTeamsPerformanceQuery = () => {
  return useQuery("teamsPerformance", fetchTeamsPerformance);
};
