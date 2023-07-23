export const getNormalizeDate = (dateNoFormal: string): string => {
  const date = new Date(dateNoFormal)

  const day = date.getDate()
  const month = date.toLocaleString('ru-RU', { month: 'long' })

  const hours = date.getHours()
  const minutes = date.getMinutes()

  return `${day} ${month} ${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}`
}
