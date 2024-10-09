import { api } from "../api";

export const CustomerApi = api.injectEndpoints({
  endpoints: (builder) => ({
    removeSingleCustomer: builder.mutation(),
    getAllCustomers: builder.query(),
    getSingleCustomer: builder.query(),
  }),
});
