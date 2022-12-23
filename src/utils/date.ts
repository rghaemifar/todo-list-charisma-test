export const getDateWithTimeString = (date: Date, withTime = false): string => {
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}${
    withTime ? ` - ${date.getHours()}:${date.getMinutes()}` : ''
  }`
}
