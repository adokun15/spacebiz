import { api } from "../api";

export const OrderApi = api.injectEndpoints({
  endpoints: (builder) => ({
    //Get all Orders for a single buyer
    getAllOrder: builder.query(), //Firebase
    //Get single a Order for the buyer
    getSingleOrder: builder.query(), //paystack
    //Request a refund a Order for the buyer
    RequestRefundSingleOrder: builder.mutation(), //Paystack,
    //Cancel Order
    CancelSingleOrder: builder.mutation(), //Paystack
    //Delivered Order
    DeliveredSingleOrder: builder.mutation(), //Paystack
  }),
});
