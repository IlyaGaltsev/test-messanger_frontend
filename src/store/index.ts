import { configureStore } from '@reduxjs/toolkit'
import userProfileApi from './api/userProfileApi'
import { rtkQueryErrorLogger } from './middlewares/rtkQueryErrors'
import authSlice from './slice/authSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    [userProfileApi.reducerPath]: userProfileApi.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(userProfileApi.middleware).concat(rtkQueryErrorLogger)
})
