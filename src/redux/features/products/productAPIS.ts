import { apiSlice } from "@/redux/api/apiSlice.js";

export const productAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    productList: builder.query({
      query: (path) => ({
        url: `/products/list/${path.pageNo}/${path.perPage}/${path.searchKey}`,
        method: "GET",
      }),
      providesTags:["Product"],
      keepUnusedDataFor: 60,
    }),
    productAdd:builder.mutation({
      query:(data)=>({
      url:"/products/create",
      method:"POST",
      body:data
      }),
      invalidatesTags:["Product"]
    }),
    productDelete:builder.mutation({
      query:(id)=>({
      url:`/products/${id}`,
      method:"DELETE",
      }),
      invalidatesTags:["Product"]
    }),
    productUpdate:builder.mutation({
      query:(data)=>({
        url:`/products/update/${data._id}`,
        method:"PATCH",
        body:data
      }),
    invalidatesTags:["Product"]
    }),
    productDetails:builder.query({
      query:(id)=>({
        url:`/products/details/${id}`,
        method:"GET"
      }),
      
    })
  }),
});
export const {useProductListQuery,useProductAddMutation,useProductDeleteMutation, useProductUpdateMutation, useProductDetailsQuery} = productAPI