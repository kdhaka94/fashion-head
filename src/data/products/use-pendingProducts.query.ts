import { useQuery } from "react-query";
import { CoreApi } from "../../utils/api/core-api";
import { API_ENDPOINTS } from "../../utils/api/endpoints";
import { PendingProducts } from "./types";

const PendingProductsService = new CoreApi("");

export const fetchPendingProducts = async () => {
  const { data } = await PendingProductsService.http.get(
    API_ENDPOINTS.PENDING_PRODUCTS
  );
  return data as PendingProducts;
};

export const usePendingProductsQuery = () => {
  return useQuery("pendingProducts", fetchPendingProducts);
};
