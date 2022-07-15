import { CoreApi } from "../core-api";
import { API_ENDPOINTS } from "../endpoints";

type LoginInputType = {
  email: string;
  password: string;
};

class Auth extends CoreApi {
  login(input: LoginInputType) {
    return this.http.post(API_ENDPOINTS.LOGIN, input).then((res) => res.data);
  }
}

export const AuthService = new Auth("");
