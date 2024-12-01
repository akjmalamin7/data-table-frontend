import { apiSlice } from "@/redux/api/apiSlice.js"

const categoriesApi = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        addCategories:builder.mutation({
            query:(data)=>({
                url:"/categories/create",
                method:"POST",
                body:data
            })
        }),
        getCategoriesList:builder.query({
            query:(path)=>({
                url:`/categories/list/${path.pageNo}/${path.perPage}/${path.searchKey}`,
                method:"GET"
            })
        })
    })
})
export const {useAddCategoriesMutation,useGetCategoriesListQuery} = categoriesApi