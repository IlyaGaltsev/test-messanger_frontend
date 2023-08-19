import $axios from '@/utils/setupAxios'
import { put, call } from 'redux-saga/effects'
import {
  fetchDataStart,
  fetchDataFailure,
  fetchDataSuccess,
} from '../slices/userSlice'

export const fetchData = async () => {
  try {
    const response = await $axios.get('/api/user/view')
    return response.data
  } catch (error: any) {
    throw new Error(error.message)
  }
}

function* userSaga() {
  try {
    yield put(fetchDataStart())
    // @ts-ignore
    const response = yield call(fetchData)
    yield put(fetchDataSuccess(response))
  } catch (error: any) {
    yield put(fetchDataFailure(error.message))
  }
}

export default userSaga