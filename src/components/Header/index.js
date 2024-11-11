import {withRouter} from 'react-router-dom'
import './index.css'

const Header = () => {
  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-large-container">
          <h1 className="heading">Brisphere</h1>
          <ul className="nav-menu">
            <a href="#discover" className="nav-menu-item">
              Discover
            </a>
            <a href="#service" className="nav-menu-item">
              Service
            </a>

            <a href="#footer" className="nav-menu-item">
              About Us
            </a>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default withRouter(Header)
