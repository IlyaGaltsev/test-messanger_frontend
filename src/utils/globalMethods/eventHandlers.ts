import { toastDefaultStyle } from '@/styled/toast.styled'
import { toast } from 'react-toastify'
import { CHAT_ROUTE } from '../routes'

export const errorsHandler = (message: string) => {
  toast.error(message ?? 'Произошла ошибка', toastDefaultStyle)
}

export const successHandler = (message: string) => {
  toast.success(message ?? 'Всё прошло успешно', toastDefaultStyle)
}

export const errorsHandlerWithValidate = (error: any, setError: any) => {
  const initialMessage: string = error.response.data.message ?? ''

  if (!initialMessage) {
    errorsHandler(error.response.data.message)
    return
  }

  const errorMessage: string = initialMessage.toLowerCase()

  if (errorMessage.includes('пароль')) {
    setError('password', { type: 'value', message: initialMessage })
    return
  }

  if (errorMessage.includes('проверьте')) {
    setError('email', { type: 'value', message: initialMessage })
    setError('password', { type: 'value', message: initialMessage })
    return
  }

  errorsHandler(error.response.data.message)
}

/**
 * 401 errors
 */
export const unAutorizedExceptionHandler = () => {
  localStorage.removeItem('access_token')
  window.location.href = CHAT_ROUTE
}
