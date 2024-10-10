import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api_reducer_path",
  baseQuery: fakeBaseQuery(),
  //User -> Account & MemberShip 
  tagTypes: ["user", "products", "customers", "orders", "transaction"],
  endpoints: () => ({}),
});
