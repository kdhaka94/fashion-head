import { CoreApi } from "../../utils/api/core-api";
import { API_ENDPOINTS } from "../../utils/api/endpoints";
import { UpdateTheme } from "./types";

export type UpdateThemeType = {
  id:string;
    title: string; 
    images: string[];
    categories: any[];
    brands: any[];
    gender: string;
    team: string;
    plan: string;
    rules: string;
    minPrice: number;
    maxPrice: number;
};

class UpdateThemeApi extends CoreApi {
  updateTheme(body: UpdateThemeType) {
    return this.http
      .post(API_ENDPOINTS.UPDATE_THEME, body)
      .then((res) => res.data as UpdateTheme)
  }
}

export const UpdateThemeService = new UpdateThemeApi("");
