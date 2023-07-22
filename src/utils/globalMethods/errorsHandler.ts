import { toastDefaultStyle } from '@/styled/toast.styled'
import { toast } from 'react-toastify'

export const errorsHandler = (message: string) => {
  toast.error(message ?? 'Произошла ошибка', toastDefaultStyle)
}
