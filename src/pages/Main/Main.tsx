import RoomList from '@/components/RoomList'
import CreateRoomModal from '@/components/RoomList/components/CreateRoomModal/CreateRoomModal'
import { TMessage } from '@/types'
import { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Main.css'
import ChatBody from '@/components/Chat/ChatBody'
import { useSelector } from 'react-redux'

const Main = () => {
  const [rooms, setRooms] = useState<any>([])
  const [messages, setMessages] = useState<TMessage[] | []>([])
  const [isShowCreateRoomModal, setShowCreateRoomModal] = useState(false)

  const socket = useSelector((state: any) => state.socket.data)
  const {
    data: userProfile,
    isError: isErrorUserProfile,
    isLoading: isLoadingUserProfile
  } = useSelector((state: any) => state.user)

  const navigate = useNavigate()

  const roomId = useMemo(() => {
    const params = new URLSearchParams(window.location.search)
    return Number(params.get('room_id'))
  }, [window.location.search, navigate])

  const findRoomById = (id: number) => {
    return rooms.find((item: any) => item.id === id)
  }

  useEffect(() => {
    if (!userProfile) {
      return
    }

    socket.emit(
      'fetchRooms',
      {
        userId: userProfile?.id
      },
      (userRooms: any) => {
        setRooms(userRooms)
      }
    )
  }, [userProfile])

  useEffect(() => {
    socket.emit('fecthMessagesInRoom', { roomId }, (messagesInRoom: any) => {
      setMessages(messagesInRoom)
    })
  }, [roomId])

  const findRoom = findRoomById(roomId)

  socket.on('rooms', (data: any) => {
    setRooms((prev: any) => (prev = data))
  })

  socket.on('messages', (data: any) => {
    if (data[0].room.id === roomId) {
      setMessages(prev => (prev = data))
    }
  })

  const sendMessage = (message: string) => {
    socket.emit(
      'createMessage',
      {
        userId: userProfile.id,
        message,
        roomId
      },
      () => {}
    )
  }

  const openCreateRoomModal = () => {
    setShowCreateRoomModal(true)
  }

  if (isLoadingUserProfile) return <p>Loading...</p>
  if (isErrorUserProfile) return <p>Ошибочка вышкла...</p>

  if (!userProfile) {
    return <p>Ошибочка вышкла, данных нет...</p>
  }

  return (
    <div className="main-page__wrapper">
      <div className="main-page__groups">
        <RoomList
          rooms={rooms}
          openCreateRoomModal={openCreateRoomModal}
          currentRoomId={roomId}
        />
      </div>
      <ChatBody
        room={findRoom}
        roomId={roomId}
        messages={messages}
        currentUserId={userProfile.id}
        sendMessage={sendMessage}
      />
      <CreateRoomModal
        isOpen={isShowCreateRoomModal}
        handleClose={() => setShowCreateRoomModal(false)}
      />
    </div>
  )
}

export default Main
