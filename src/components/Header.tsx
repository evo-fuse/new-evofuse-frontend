import siteLogo from '@assets/logo.png'
import { Link, NavLink } from 'react-router-dom'
import { FaHome, FaGamepad, FaBookOpen, FaTrophy, FaEnvelope, FaFileContract, FaInfoCircle } from 'react-icons/fa'

function Header() {
  return (
    <div className="user-bar">
      <div className="user">
        <div className="brand">
          <Link to="/" className="brand" aria-label="EvoFuse Home">
            <img className="logo-img" src={siteLogo} alt="EvoFuse" />
            <div className="brand-text">
              <div className="brand-title">EVOFUSE</div>
            </div>
          </Link>
        </div>
        <nav className="nav">
          <NavLink to="/" end className="nav-item">
            <FaHome className="nav-icon" />
            <span className="nav-text">Home</span>
          </NavLink>
          <NavLink to="/games" className="nav-item">
            <FaGamepad className="nav-icon" />
            <span className="nav-text">Games</span>
          </NavLink>
          <NavLink to="/blog" className="nav-item">
            <FaBookOpen className="nav-icon" />
            <span className="nav-text">Blog</span>
          </NavLink>
          <NavLink to="/leaderboard" className="nav-item">
            <FaTrophy className="nav-icon" />
            <span className="nav-text">Leaderboard</span>
          </NavLink>
          <NavLink to="/about" className="nav-item">
            <FaInfoCircle className="nav-icon" />
            <span className="nav-text">About Us</span>
          </NavLink>
          <NavLink to="/terms" className="nav-item">
            <FaFileContract className="nav-icon" />
            <span className="nav-text">Terms & Conditions</span>
          </NavLink>
        </nav>
        <div className="user-actions">
          <Link to="/contact" className="btn btn-contact">
            <FaEnvelope className="btn-contact-icon" />
            <span className="btn-contact-text">Contact Us</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header


