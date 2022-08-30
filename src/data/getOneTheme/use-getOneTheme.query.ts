import { useQuery } from "react-query";
import { CoreApi } from "../../utils/api/core-api";
import { API_ENDPOINTS } from "../../utils/api/endpoints";
import { Themes } from "./types";

const GetOneTheme = new CoreApi("");

export const getOneTheme = async (id:any) => {
  const { data } = await GetOneTheme.http.get(
    API_ENDPOINTS.GETONETHEME+'/'+id
  );
  return data as Themes;
};

export const useGetOneThemeQuery = () => {
  return useQuery("getOneTheme", getOneTheme);
};
