import MainRoute from '../../Routes/MainRoute/MainRoute'
import { useLocation } from 'react-router-dom'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import './MainLayout.css'

function MainLayout(): JSX.Element {
  const location = useLocation()
  const showNavbar =
    location.pathname !== '/register' && location.pathname !== '/login'

  return (
    <div className="MainLayout">
      {showNavbar && (
        <header>
          <NavBar />
        </header>
      )}
      <main>
        <MainRoute />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default MainLayout
