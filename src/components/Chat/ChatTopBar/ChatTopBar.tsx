import { VscGear } from 'react-icons/vsc'
import ChatInfo from '../ChatInfo'

import styles from './ChatTopBar.module.css'

const ChatTopBar = ({ data, updateRoom }: any) => {
  return (
    <div className={styles.wrapper}>
      <ChatInfo
        name={data.name}
        subname={data.subname}
        avatarPath={data.avatarPath}
      />
      <div className={styles.menu}>
        <VscGear onClick={updateRoom} size={24}/>
      </div>
    </div>
  )
}

export default ChatTopBar
