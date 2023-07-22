import { setAuth } from "@/store/slice/authSlice"
import { useDispatch } from "react-redux"

const Chat = () => {
  const dispatch = useDispatch()
  const logout = ( ) => {
    localStorage.removeItem('access_token')
    dispatch(setAuth(false))

  }
  return <div><button onClick={logout}>Logout</button></div>
}

export default Chat
