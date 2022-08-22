import { useQuery } from "react-query";
import { CoreApi } from "../../utils/api/core-api";
import { API_ENDPOINTS } from "../../utils/api/endpoints";
import { Plans } from "./types";

const PlansService = new CoreApi("");

export const fetchPlans = async () => {
  const { data } = await PlansService.http.get(
    API_ENDPOINTS.PLANS
  );
  return data as Plans;
};

export const usePlansQuery = () => {
  return useQuery("plans", fetchPlans);
};
