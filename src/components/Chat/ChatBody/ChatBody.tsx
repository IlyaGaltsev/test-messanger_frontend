import ChatSendForm from '../ChatSendForm'
import MessagesList from '../MessagesList'
import ChatTopBar from '../ChatTopBar'
import './ChatBody.css'
import { useEffect, useState } from 'react'
import CustomInput from '@/components/CustomInput'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'

const ChatBody = ({ room, roomId, messages, currentUserId, sendMessage }: any) => {
  const socket = useSelector((state: any) => state.socket.data)
  const [isShowUpdateRoom, setShowUpdateRoom] = useState(false)
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors }
  } = useForm<any>()

  useEffect(() => {
    if (room) {
      setValue('name', room.name)
      setValue('avatar', room.avatar)
    }
  }, [room, setValue])

  const onSubmit = handleSubmit(data => {
    socket.emit(
      'updateRoom',
      {
        ...data,
        owner: room.owner.id,
        id: room.id
      },
      () => {}
    )
  })

  if (!roomId || !room) {
    return (
      <div className="chat-body__wrapper">
        <p>Выберите комнату</p>
      </div>
    )
  }

  return (
    <div className="chat-body__wrapper">
      {isShowUpdateRoom ? (
        <>
          <button onClick={() => setShowUpdateRoom(!isShowUpdateRoom)}>Назад</button>
          <form onSubmit={onSubmit}>
            <CustomInput
              placeholder="Введите название комнаты"
              params={{ ...register('name') }}
              title="Название комнаты"
            />
            <CustomInput
              placeholder="Введите URL катинки"
              params={{ ...register('avatar') }}
              title="Фотография комнаты"
            />
            <button>Обновить</button>
          </form>

          {/* <Select
            margin="dense"
            label="Участники"
            value={participants}
            onChange={handleChange}
            fullWidth
            multiple={true}
            variant="filled"
            // renderValue={(items) => <p>{items.map((item: any) => <p>{item}</p>)}</p>} 
          >
            {users.length &&
              users.map(({id, name, email, avatarPath}: any) => (
                <MenuItem
                  key={id}
                  value={id}
                >
                  <Avatar src={avatarPath} />
                  <Box sx={{flexDirection: 'column', marginLeft: 1}}>
                    <Typography variant="subtitle1">{name}</Typography>
                    <Typography variant="body2" color="gray">{email}</Typography>
                  </Box>
                </MenuItem>
              ))}
          </Select> */}
        </>
      ) : (
        <>
          {room ? (
            <ChatTopBar
              data={{
                name: room.name,
                avatarPath: room.avatar ?? '',
                subtitle: ''
              }}
              updateRoom={() => setShowUpdateRoom(!isShowUpdateRoom)}
            />
          ) : null}

          <MessagesList
            messages={messages}
            currentUserId={currentUserId}
          />

          <div className="chat-body__send-form">
            <ChatSendForm sendMessage={sendMessage} />
          </div>
        </>
      )}
    </div>
  )
}

export default ChatBody
