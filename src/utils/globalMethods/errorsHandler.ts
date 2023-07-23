import { toastDefaultStyle } from '@/styled/toast.styled'
import { toast } from 'react-toastify'

export const errorsHandler = (message: string) => {
  toast.error(message ?? 'Произошла ошибка', toastDefaultStyle)
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
