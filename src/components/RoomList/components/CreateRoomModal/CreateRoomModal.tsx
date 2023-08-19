import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { useEffect, useState } from 'react'
import { Avatar, Box, InputLabel, Select, SelectChangeEvent, Typography } from '@mui/material'
import { MenuItem } from '@mui/material'
import $axios from '@/utils/setupAxios'
import { useSelector } from 'react-redux'

export default function CreateRoomModal({ handleClose, isOpen }: any) {
  const socket = useSelector((state: any) => state.socket.data);

  const [participants, setParticipants] = useState<number[]>([])
  const [users, setUsers] = useState<any>([])
  const [nameRoom, setNameRoom] = useState<string>('')
  const [avatarRoom, setAvatarRoom] = useState<string>('')

  const {
    data: userProfile,
    isError: isErrorUserProfile,
    isLoading: isLoadingUserProfile
  } = useSelector((state: any) => state.user)

  useEffect(() => {
    const fetchAllUsers = async () => {
      await $axios
        .get('/api/user/everyone-but-me')
        .then(({ data }: any) => setUsers(data))
        .catch(error => console.log(error))
    }

    fetchAllUsers()
  }, [])

  const handleChangeNameRoom = (e: any) => {
    setNameRoom(e.target.value)
  }

  const handleChangeAvatarRoom  = (e: any) => {
    setAvatarRoom(e.target.value)
  }

  

  const handleChange = (event: any) => {
    console.log(event.target.value, typeof event.target.value)

    setParticipants(event.target.value)
  }

  const createRoom = () => {
    socket.emit(
      'createRoom',
      {
        name: nameRoom,
        owner: userProfile.id,
        avatar: avatarRoom,
        participants: [...participants, userProfile.id]
      },
      () => {}
    )
  }

  if (isLoadingUserProfile && !users) return <p>Loading...</p>
  if (isErrorUserProfile) return <p>Ошибочка вышкла...</p>
  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={handleClose}
      >
        <DialogTitle>Создание комнаты</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Название комнаты"
            value={nameRoom}
            onChange={handleChangeNameRoom}
            fullWidth
            variant="filled"
          />
          <TextField
            margin="dense"
            label="URL-изображения"
            value={avatarRoom}
            onChange={handleChangeAvatarRoom}
            fullWidth
            variant="filled"
          />
          <InputLabel>Участники</InputLabel>
          <Select
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
          </Select>
          <Typography variant='body2' color="gray">При создании комнаты вы автоматически становитесь ее участником</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={createRoom}>Создать комнату</Button>
          <Button onClick={handleClose}>Отмена</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
