
//import { productLocal } from '../datasource/local/productLocal';

import { productRemote } from "../datasource/remote/productRemote";


export const productRepository = {
  getProducts: async () => {
    try {
      const remote = await productRemote.getProducts();
     // await productLocal.save(remote);
     console.log('Product data', remote);
      return remote;
    } catch (e) {
      console.log('Product data error');
      //return await productLocal.get();
    }
  },
};