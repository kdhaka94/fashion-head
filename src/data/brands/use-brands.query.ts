import { useQuery } from "react-query";
import { CoreApi } from "../../utils/api/core-api";
import { API_ENDPOINTS } from "../../utils/api/endpoints";
import { Brands } from "./types";

const BrandsService = new CoreApi("");

export const fetchBrands = async () => {
  const { data } = await BrandsService.http.get(
    API_ENDPOINTS.BRANDS
  );
  return data as Brands;
};

export const useBrandsQuery = () => {
  return useQuery("brands", fetchBrands);
};
