import { CoreApi } from "../../utils/api/core-api";
import { API_ENDPOINTS } from "../../utils/api/endpoints";
import { LoginResult } from "./types";

export type LoginInputType = {
  email: string;
  password: string;
};

class Auth extends CoreApi {
  login(input: LoginInputType) {
    const modifiedInfo = {
      username: input.email,
      password: input.password,
      role: "head_selector",
    };
    return this.http
      .post(API_ENDPOINTS.LOGIN, modifiedInfo)
      .then((res) => res.data as LoginResult)
  }
}

export const AuthService = new Auth("");
