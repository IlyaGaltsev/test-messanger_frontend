import { configureStore } from '@reduxjs/toolkit'
import { rtkQueryErrorLogger } from './middlewares/rtkQueryErrors'
import authSlice from './slices/authSlice'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga'
import userSlice from './slices/userSlice'
import socketSlice from './slices/socketSlice'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    // [userProfileApi.reducerPath]: userProfileApi.reducer,
    user: userSlice.reducer,
    socket: socketSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      // .concat(userProfileApi.middleware)
      .concat(rtkQueryErrorLogger)
      .concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)
