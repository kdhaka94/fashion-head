import Axios from "./http";
import AxiosFtp from "./ftp";

export class CoreApi {
  http = Axios;
  ftp = AxiosFtp;
  constructor(public _base_path: string) {}
  upload(file: any) {}
}
