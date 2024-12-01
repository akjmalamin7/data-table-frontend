import { apiSlice } from "@/redux/api/apiSlice.js"

export const productAPI = apiSlice.injectEndpoints({
      endpoints: (builder) => ({
        uploadImage:builder.mutation({
            query:(data)=>({
                url:'/upload-image',
                method:"POST",
                body:data
            })
        })
      })
})
export const {useUploadImageMutation} = productAPI