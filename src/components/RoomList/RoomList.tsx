import { VscAdd } from 'react-icons/vsc'
import RoomCard from './components/RoomCard'
import './RoomList.css'

const RoomList = ({ rooms, openCreateRoomModal, currentRoomId }: any) => {
  return (
    <div className="room-list__wrapper">

      <div className="room-list__header">
        <h2>Комнаты</h2>
        <VscAdd size={24} onClick={openCreateRoomModal} />
      </div>
      <div className="room-list__rooms">
        {!rooms ? (
          <p>Комнат нет, создайте</p>
        ) : (
          rooms.map((item: any) => (
            <RoomCard
              key={item.id}
              {...item}
              isSelected={item.id === currentRoomId}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default RoomList
