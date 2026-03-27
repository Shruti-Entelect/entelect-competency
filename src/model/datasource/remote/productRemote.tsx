import { fetchProductsApi } from "../../api/APIServices";


export const productRemote = {
  getProducts: async () => {
    return await fetchProductsApi();
  },
};