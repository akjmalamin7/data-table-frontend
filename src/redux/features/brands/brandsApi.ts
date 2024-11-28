import { apiSlice } from "@/redux/api/apiSlice";

interface BrandsProps{
    name:string;
    image?:string;
}
const brandApi = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        addBrand:builder.mutation({
            query:(data)=>({
                url:"/brands/create",
                method:"POST",
                body:data
            })
        }),
        getBrandsList:builder.query({
            query:(path)=>({
                url:`/brands/list/${path.pageNo}/${path.perPage}/${path.searchKey}`,
                method:"GET"
            })
        })
    })
})
export const {useAddBrandMutation, useGetBrandsListQuery} = brandApi