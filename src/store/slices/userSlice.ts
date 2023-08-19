import { createSlice } from '@reduxjs/toolkit'

type TUserState = {
  data: any
  isLoading: boolean
  isError: boolean
}

const initialState: TUserState = {
  data: null,
  isLoading: false,
  isError: false
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchDataStart(state) {
      state.isLoading = true
      state.isError = false
    },
    fetchDataSuccess(state, action) {
      state.isLoading = false
      state.data = action.payload
    },
    fetchDataFailure(state, action) {
      state.isError = false
      state.isError = true
    }
  }
})

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } = userSlice.actions

export default userSlice
