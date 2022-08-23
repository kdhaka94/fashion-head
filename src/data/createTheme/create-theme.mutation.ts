import { useMutation } from "react-query";
import { CreateThemeService, CreateThemeType } from "./createTheme.service";


export const useCreateThemeMutation = () => {
  return useMutation((input: CreateThemeType) => CreateThemeService.createTheme(input));
};

