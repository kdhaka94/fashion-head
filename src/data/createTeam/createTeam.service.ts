import { CoreApi } from "../../utils/api/core-api";
import { API_ENDPOINTS } from "../../utils/api/endpoints";
import { CreateTeam } from "./types";

export type CreateTeamType = {
  username:string,
  role:string,
  email:string,
  password:string,
  firstName:string,
  lastName:string,
  countryCode:string,
  phone: string,
  gender: string,
  themes: any[],
    uploadedResume: any[],
    uploadedId: any[],
    monthlyStipend: number,
    notes : string,
    isHeadSelector: boolean,
    team:string[]
};

class CreateTeamApi extends CoreApi {
  createTeam(body: CreateTeamType) {
    return this.http
      .post(API_ENDPOINTS.CREATE_TEAM, body)
      .then((res) => res.data as CreateTeam)
  }
}

export const CreateTeamService = new CreateTeamApi("");
