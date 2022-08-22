import { useQuery } from "react-query";
import { CoreApi } from "../../utils/api/core-api";
import { API_ENDPOINTS } from "../../utils/api/endpoints";
import { Category } from "./types";

const CategoryService = new CoreApi("");

export const fetchCategory = async () => {
  const { data } = await CategoryService.http.get(
    API_ENDPOINTS.CATEGORY
  );
  return data as Category;
};

export const useCategoryQuery = () => {
  return useQuery("category", fetchCategory);
};
