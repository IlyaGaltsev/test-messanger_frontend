import { put, call } from 'redux-saga/effects'
import io from 'socket.io-client'
import { API_BASE_URL } from '@/utils/setupAxios'
import { setSocket } from '../slices/socketSlice'

export const connect = () => {
  return io(API_BASE_URL ?? '')
}

function* socketSaga() {
  try {
    // @ts-ignore
    const socket = yield call(connect)
    yield put(setSocket(socket))
  } catch (error) {
    console.error('Socket connection error:', error)
  }
}

export default socketSaga
