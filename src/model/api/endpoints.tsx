export const ENDPOINTS = {
//   AUTH: {
//     LOGIN: '/auth/login',
//     REGISTER: '/auth/register',
//   },
  PRODUCTS: {
    GET_ALL: '/products',
    GET_BY_ID: (id: number) => `/products/${id}`,
  },
};