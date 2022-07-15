import Axios from "./http";

export class CoreApi {
  http = Axios;
  constructor(public _base_path: string) {}
}
