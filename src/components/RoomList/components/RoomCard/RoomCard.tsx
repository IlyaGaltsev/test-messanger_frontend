import { stringAvatar } from '@/utils/globalMethods/stringAvatar'
import { Avatar } from '@mui/material'
import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './RoomCard.module.css'

const RoomCard = memo(({ id, name, avatar, isSelected }: any) => {
  const navigate = useNavigate()

  const handleItemClick = () => {
    navigate(`/chat?room_id=${id}`)
  }

  return (
    <button
      onClick={handleItemClick}
      className={`${styles.card} ${isSelected? styles.card_current :''}`}
    >
      <Avatar
        src={avatar}
        alt={name}
        {...stringAvatar(name)}
      />
      <div className={styles.cardTypography}>
        <h3>{name}</h3>
        <p>last message</p>
      </div>

      {/* <Box sx={{ opacity: open ? 1 : 0, display: open ? 'flex' : 'none', flexDirection: 'column' }}>
          <Typography variant='body2'>{name}</Typography>
          <Typography variant='body2' color="gray">last messaage</Typography>
        </Box> */}
    </button>
  )
})

export default RoomCard
