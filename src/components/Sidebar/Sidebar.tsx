import './Sidebar.css'
import { VscHome, VscOrganization, VscSignOut, VscGear } from 'react-icons/vsc'
import { Link } from 'react-router-dom'
import { CHAT_ROUTE, PROFILE_ROUTE, SETTINGS_ROUTE } from '@/utils/routes'
import { useSelector } from 'react-redux'

const Sidebar = () => {
  const { data, isLoading, isError } = useSelector((state: any) => state.user)
  const logout = () => {}

  return (
    <div className="sidebar__wrapper">
      <div className="sidebar__top-content">
        <div className="sidebar__avatar">
          {isLoading || isError ? null : (
            <img
              src={data.avatarPath}
              alt={`${data.name}'s Avatar`}
            />
          )}
        </div>
        <nav className="sidebar__nav-menu">
          <Link to={PROFILE_ROUTE}>
            <VscHome size={32} />
          </Link>
          <Link to={CHAT_ROUTE}>
            <VscOrganization size={32} />
          </Link>
          <Link to={SETTINGS_ROUTE}>
            <VscGear size={32} />
          </Link>
        </nav>
      </div>

      <div className="sidebar__bottom-content">
        <nav className="sidebar__nav-menu">
          <button onClick={logout}>
            <VscSignOut size={32} />
          </button>
        </nav>
      </div>
    </div>
  )
}

export default Sidebar
