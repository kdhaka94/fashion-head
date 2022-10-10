import { SingleTheme } from "@components/SingleTheme";
import React,{useEffect} from "react";
import { useParams } from "react-router-dom";
import { useGetOneThemeQuery } from "@data/getOneTheme/use-getOneTheme.query";
import { useHeadStore } from "@utils/zustand/store";
export const SingleThemeReview = () => {
  const params=useParams();
  const themeId=params.themeId;
  const { data: ThemeInfo } = useGetOneThemeQuery({themeId:themeId})
  const {setThemeInfo} =useHeadStore();
  const getOneTheme=React.useCallback(()=>{
      const response=ThemeInfo;
      return response;
  },[ThemeInfo])
useEffect(() => {
 setThemeInfo(getOneTheme()!!);

},[ThemeInfo])


  return <SingleTheme />;
};
