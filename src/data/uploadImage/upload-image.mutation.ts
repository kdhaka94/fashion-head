import { useMutation } from "react-query";
import { CoreApi } from "../../utils/api/core-api";
import { API_ENDPOINTS } from "../../utils/api/endpoints";
import { UploadImage } from "./types";

const UploadImageService = new CoreApi("");

export const fetchUploadImage = async (file) => {
  var formData = new FormData();
  formData.append('files', file); 
  const { data } = await UploadImageService.http.post(
    API_ENDPOINTS.UPLOAD_IMAGE,
    formData
  );
  return data as UploadImage;
};

export const useUploadImageMutation = () => {
  return useMutation((input: File) => fetchUploadImage(input));
};