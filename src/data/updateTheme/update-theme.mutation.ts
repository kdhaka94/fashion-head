import { useMutation } from "react-query";
import { UpdateThemeService, UpdateThemeType } from "./updateTheme.service";


export const useUpdateThemeMutation = () => {
  return useMutation((input: UpdateThemeType) => UpdateThemeService.updateTheme(input));
};

