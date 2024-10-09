import { api } from "../api";

export const ProductApi = api.injectEndpoints({
  endpoints: (builder) => ({
    //Get all Products for a single buyer
    getAllProduct: builder.query(),
    //Get single a Product for the buyer
    getSingleProduct: builder.query(),
    //Remove a Product for the buyer
    updateSingleProduct: builder.mutation(),
    //Delete a Product for the buyer
    RemoveSingleProduct: builder.mutation(),

    //Create a Product for the buyer
    AddSingleProduct: builder.mutation(),

    //Products for buyer: by a seller
    getAllProductForEndUser: builder.query(),
    getSingleProductForEndUser: builder.query(),
  }),
});
