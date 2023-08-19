import Avatar from '@/components/Avatar'
import BackButton from '@/components/BackButton'
import CustomInput from '@/components/CustomInput'
import Loader from '@/components/Loader'
import { styleInput } from '@/styled/customInput.styled'
import { BaseTitle } from '@/styled/Global.styled'
import { TUser } from '@/types'
import { optionsUpdateProfile } from '@/utils/customInputsOptions'
import { AvatarSize } from '@/utils/enums'
import { errorsHandler, successHandler } from '@/utils/globalMethods/eventHandlers'
import $axios from '@/utils/setupAxios'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import * as S from './Settings.styled'

const Settings = () => {
  const { data, isLoading, isError } = useSelector((state: any) => state.user)

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors }
  } = useForm<TUser>()

  useEffect(() => {
    if (data) {
      setValue('name', data.name)
      setValue('avatarPath', data.avatarPath)
      setValue('address', data.address)
    }
  }, [data, setValue])

  const onSubmit = handleSubmit(data => {
    $axios
      .put(`/api/user/update`, data)
      .then(() => {
        successHandler('Данные обновлены')
        setTimeout(() => {
          window.location.reload() //попозже настрою обновление данных в rtk и уберу timeout
        }, 1000)
      })
      .catch(error => errorsHandler(error))
  })

  if (isLoading) {
    return <Loader />
  }

  if (isError) {
    return <BaseTitle>ОШИБКА, попробуйте позже</BaseTitle>
  }

  if (!data) {
    return <BaseTitle>Вы не авторизированы или произошла ошибка на сервере</BaseTitle>
  }

  return (
    <S.SettingsWrapper>
      <BackButton />
      <Avatar
        avatarPath={data.avatarPath}
        size={AvatarSize.large}
        style={{ marginBottom: 16 }}
      />
      <S.Title>{data.name}</S.Title>
      <S.UserOptions onSubmit={onSubmit}>
        <CustomInput
          placeholder="Введите имя"
          params={{ ...register('name', optionsUpdateProfile.name) }}
          error={errors.name?.message}
          style={styleInput}
          title="Ваше имя"
        />
        <CustomInput
          placeholder="Введите адрес"
          params={{ ...register('address') }}
          error={errors.address?.message}
          style={styleInput}
          title="Ваш адрес"
        />
        <CustomInput
          placeholder="Введите URL изображения"
          params={{ ...register('avatarPath') }}
          error={errors.avatarPath?.message}
          style={styleInput}
          title="URL изображения"
        />

        <S.ButtonSave>Сохранить</S.ButtonSave>
      </S.UserOptions>
    </S.SettingsWrapper>
  )
}

export default Settings
