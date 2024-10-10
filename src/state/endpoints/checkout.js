import { api } from "../api";

export const CheckoutApi = api.injectEndpoints({
  endpoints: (builder) => ({
    //Order & Product Combo: 

    //Redirects: checkout
    buySingleProduct: builder.mutation(),
    
    }),
});
