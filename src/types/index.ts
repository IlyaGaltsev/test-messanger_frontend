export type TLogin = {
  email: string
  password: string
}

export type TRegister = TLogin & {
  name: string
}
