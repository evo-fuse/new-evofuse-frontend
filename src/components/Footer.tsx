import { useState } from 'react'
import { Link } from 'react-router-dom'
import siteLogo from '@assets/logo.png'
import { FaTwitter, FaDiscord, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { FaTiktok } from 'react-icons/fa6'

function Footer() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    setEmail('')
  }

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src={siteLogo} alt="EvoFuse" className="footer-logo-img" />
          </div>
          <div className="footer-brand-name">EVOFUSE</div>
          <div className="footer-socials">
            <a aria-label="Discord" className="footer-social-icon"><FaDiscord /></a>
            <a aria-label="Twitter" className="footer-social-icon"><FaTwitter /></a>
            <a aria-label="LinkedIn" className="footer-social-icon"><FaLinkedin /></a>
            <a aria-label="TikTok" className="footer-social-icon"><FaTiktok /></a>
            <a aria-label="YouTube" className="footer-social-icon"><FaYoutube /></a>
          </div>
        </div>
        <div className="footer-newsletter">
          <div className="footer-heading">NEWSLETTER</div>
          <div className="footer-newsletter-desc">Join our newsletter to stay updated on features and releases.</div>
          <form className="footer-newsletter-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              className="footer-email-input"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="footer-subscribe-btn">Subscribe</button>
          </form>
          <div className="footer-privacy-text">
            By subscribing, you agree to our <Link to="/privacy" className="footer-privacy-link">Privacy Policy</Link> and consent to updates.
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-separator"></div>
        <div className="footer-bottom-content">
          <div className="footer-copyright">© 2025 EvoFuse LLC. All rights reserved.</div>
          <div className="footer-legal-links">
            <Link to="/terms" className="footer-legal-link">Terms & Conditions</Link>
            <Link to="/privacy" className="footer-legal-link">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


