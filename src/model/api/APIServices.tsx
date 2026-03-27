
import { apiClient } from './Client';
import { ENDPOINTS } from './endpoints';

export const fetchProductsApi = async () => {
  const response = await apiClient.get(ENDPOINTS.PRODUCTS.GET_ALL);
  return response.data;
};