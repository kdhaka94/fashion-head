import { useQuery } from "react-query";
import { CoreApi } from "../../utils/api/core-api";
import { API_ENDPOINTS } from "../../utils/api/endpoints";
import { Themes } from "./types";

const GetOneTheme = new CoreApi("");

export const getOneTheme = async (id:string) => {
  console.log("sgdfx",id)
  const { data } = await GetOneTheme.http.get(
    API_ENDPOINTS.GETONETHEME+'/'+id
  );
  console.log(data)
  return data as Themes;
};

export const useGetOneThemeQuery = ({themeId}) => {
  return useQuery(['getOneTheme', themeId], () => getOneTheme(themeId));
};
