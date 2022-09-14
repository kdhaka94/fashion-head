import { CoreApi } from "../../utils/api/core-api";
import { API_ENDPOINTS } from "../../utils/api/endpoints";
import { CreateTheme } from "./types";

export type CreateThemeType = {
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

class CreateThemeApi extends CoreApi {
  createTheme(body: CreateThemeType) {
    return this.http
      .post(API_ENDPOINTS.CREATE_THEME, body)
      .then((res) => res.data as CreateTheme)
  }
}

export const CreateThemeService = new CreateThemeApi("");
