export const getToken = () => {
  return localStorage.getItem('access_token')
}

export const setToken = (access_token: string) => {
  localStorage.setItem('access_token', access_token)
}
