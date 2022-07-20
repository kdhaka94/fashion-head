import { useQuery } from "react-query";
import { CoreApi } from "@utils/api/core-api";
import { API_ENDPOINTS } from "@utils/api/endpoints";
import { Themes } from "./types";

const ThemesService = new CoreApi("");

export const fetchThemes = async () => {
  const { data } = await ThemesService.http.get(API_ENDPOINTS.THEMES);
  return data as Themes;
};

export const useThemesQuery = () => {
  return useQuery("themes", fetchThemes);
};
