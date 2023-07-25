import { getToken } from '@/utils/globalMethods/tokenMethods'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

const setHeaders = (headers: any) => {
  const token = getToken()

  if (token) {
    headers.set('Authorization', `Bearer ${token}`)
  }
  
  return headers
}

const userProfileApi: any = createApi({
  reducerPath: 'userProfileApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: headers => setHeaders(headers)
  }),
  endpoints: builder => ({
    getUserProfile: builder.query({
      query: () => '/api/user/view',
    })
  })
})

export const { useGetUserProfileQuery } = userProfileApi
export default userProfileApi
