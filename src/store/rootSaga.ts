import { all } from 'redux-saga/effects'
import socketSaga from './sagas/socketSaga'
import userSaga from './sagas/userSaga'

function* rootSaga() {
  yield all([userSaga(), socketSaga()])
}

export default rootSaga
