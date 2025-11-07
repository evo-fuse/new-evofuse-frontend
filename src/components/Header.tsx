import siteLogo from '@assets/logo.png'
import { Link, NavLink } from 'react-router-dom'

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
          <NavLink to="/" end className="nav-item">Home</NavLink>
          <NavLink to="/games" className="nav-item">Games</NavLink>
          <NavLink to="/blog" className="nav-item">Blog</NavLink>
          <NavLink to="/leaderboard" className="nav-item">Leaderboard</NavLink>
        </nav>
        <div className="user-actions">
          <button className="btn btn-contact">Contact Us</button>
        </div>
      </div>
    </div>
  )
}

export default Header


