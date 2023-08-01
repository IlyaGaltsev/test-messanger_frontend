import { isRejectedWithValue } from '@reduxjs/toolkit'
import type { MiddlewareAPI, Middleware } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { toastDefaultStyle } from '@/styled/toast.styled'
import { unAutorizedExceptionHandler } from '@/utils/globalMethods/eventHandlers'

export const rtkQueryErrorLogger: Middleware = (api: MiddlewareAPI) => next => action => {
  if (isRejectedWithValue(action)) {    
    toast.error(`Статус ${action.payload.status}: ${action.payload.data.message}`, toastDefaultStyle)

    if (action.payload.status === 401) unAutorizedExceptionHandler()

    if (action.payload.status === 500)  toast.error(`Возникла внутренняя ошибка сервера :(`, toastDefaultStyle)

  }

  return next(action)
}
