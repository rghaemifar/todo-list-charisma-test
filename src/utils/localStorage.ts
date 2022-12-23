export const setToLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const getToLocalStorage = (key: string) => {
  const value = localStorage.getItem(key)
  return typeof value === 'string' ? JSON.parse(value) : null
}

export const removeFromLocalStorage = (key: string) => {
  localStorage.removeItem(key)
}
