import { createSlice } from '@reduxjs/toolkit'

const socketSlice = createSlice({
  name: 'socket',
  initialState: {
    data: {}
  },
  reducers: {
    setSocket: (state, action) => {
      state.data = action.payload
    }
  }
})

export const { setSocket } = socketSlice.actions
export default socketSlice
