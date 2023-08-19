import { stringAvatar } from '@/utils/globalMethods/stringAvatar'
import { Avatar } from '@mui/material'
import styles from './ChatInfo.module.css'

type TChatInfo = {
  name: string
  subname: any | string
  avatarPath: string
}

const ChatInfo = ({ name, subname, avatarPath }: TChatInfo) => {
  return (
    <div className={styles.wrapper}>
      <Avatar
        src={avatarPath}
        {...stringAvatar(name)}
        alt={name}
        style={{ width: 32, height: 32 }}
      />
      <div className={styles.typography}>
        <h2>{name}</h2>
        <p>{subname}</p>
      </div>
    </div>
  )
}

export default ChatInfo
