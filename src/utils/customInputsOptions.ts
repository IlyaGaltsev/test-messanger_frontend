export const optionsLogin = {
  email: {
    required: 'Поле пустое'
  },
  password: {
    required: 'Поле пустое',
    minLength: {
      value: 5,
      message: 'Минимальная длинна 5 символов'
    }
  }
}

export const optionsRegister = {
  name: {
    required: 'Поле пустое',
    minLength: {
      value: 2,
      message: 'Минимальная длинна 2 символа'
    }
  },
  email: {
    required: 'Поле пустое',
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: 'Такой электронной почты не существует'
    }
  },
  password: {
    required: 'Поле пустое',
    minLength: {
      value: 5,
      message: 'Минимальная длинна 5 символов'
    },
    maxLength: {
      value: 12,
      message: 'Максимальная длинна 12 символов'
    }
  }
}

export const optionsUpdateProfile = {
  name: {
    required: 'Поле пустое',
    minLength: {
      value: 5,
      message: 'Минимальная длинна 5 символов'
    },
    maxLength: {
      value: 16,
      message: 'Максимальная длинна 16 символов'
    }
  },
}
