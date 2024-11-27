import { apiSlice } from "../../api/apiSlice";

export const productAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    productList: builder.query({
      query: (path) => ({
        url: `/products/list/${path.pageNo}/${path.perPage}/${path.searchKey}`,
        method: "GET",
      }),
    }),
  }),
});
export const {useProductListQuery} = productAPI