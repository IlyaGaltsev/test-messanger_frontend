import Sidebar from '@/components/Sidebar'
import { useEffect, useState } from 'react'
import './MainLayout.css'

const MainLayout = ({ children }: any) => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  if (windowSize.width < 640) {
    return (
      <div className="main-layout__wrapper_mobile">
        <p>
          Для вашего устройства будет разработано мобильное приложение, а пока зайдите сюда с
          планшета или компьютера
        </p>
      </div>
    )
  }
  return (
    <div className="main-layout__wrapper">
      <Sidebar />
      {children}
    </div>
  )
}

export default MainLayout
