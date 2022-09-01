import { CoreApi } from "../../utils/api/core-api";
import { API_ENDPOINTS } from "../../utils/api/endpoints";
import { CreateTheme } from "./types";

export type CreateThemeType = {
    title: string; 
    images: string[];
    categories: string[];
    brands: string[];
    gender: string;
    team: string;
    plan: string;
    rules: string;
    minPrice: number;
    maxPrice: number;
};

class CreateThemeApi extends CoreApi {
  createTheme(body: CreateThemeType) {
    return this.http
      .post(API_ENDPOINTS.CREATE_THEME, body)
      .then((res) => res.data as CreateTheme)
  }
}

export const CreateThemeService = new CreateThemeApi("");
