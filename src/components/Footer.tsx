import { useState } from 'react'
import { Link } from 'react-router-dom'
import siteLogo from '@assets/logo.png'
import { FaDiscord, FaLinkedin, FaYoutube, FaFacebook, FaCheck, FaTimes, FaExclamationTriangle } from 'react-icons/fa'
import { FaTelegram } from 'react-icons/fa6'

function Footer() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [validationError, setValidationError] = useState<string>('')
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | 'warning' | null
    message: string
  }>({ type: null, message: '' })

  const validateEmail = (emailValue: string): string => {
    if (!emailValue.trim()) {
      return 'Email is required'
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(emailValue.trim())) {
      return 'Please enter a valid email address'
    }
    return ''
  }

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate email
    const emailError = validateEmail(email)
    if (emailError) {
      setValidationError(emailError)
      return
    }

    setValidationError('')
    setIsSubmitting(true)
    setStatus({ type: null, message: '' })

    try {
      const response = await fetch('https://2048.api.evofuse.xyz/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ email: email.trim() })
      })

      // Check if response is successful (status 200-299, including 202)
      const isSuccess = response.ok || (response.status >= 200 && response.status < 300) || response.status === 202
      
      if (isSuccess) {
        // Success response - consume the response but don't show it
        try {
          await response.json()
        } catch (e) {
          // Ignore JSON parsing errors for success response
          console.log('Response consumed (may not be JSON)')
        }
        setStatus({
          type: 'success',
          message: 'Successfully subscribed! Thank you for joining our newsletter.'
        })
        setEmail('')
      } else if (response.status === 409) {
        setStatus({
          type: 'warning',
          message: 'This email is already subscribed.'
        })
      } else if (response.status === 400) {
        setStatus({
          type: 'error',
          message: 'Please enter a valid email address.'
        })
      } else {
        // For other error statuses, show a generic error message
        setStatus({
          type: 'error',
          message: 'Something went wrong. Please try again later.'
        })
      }
    } catch (error) {
      console.error('Subscription error:', error)
      setStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.'
      })
    } finally {
      setIsSubmitting(false)
    }
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
            <a href="https://discord.gg/evofuse" target="_blank" rel="noopener noreferrer" aria-label="Discord" className="footer-social-icon"><FaDiscord /></a>
            <a href="https://t.me/evofuse" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="footer-social-icon"><FaTelegram /></a>
            <a href="https://youtube.com/@evofuse" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="footer-social-icon"><FaYoutube /></a>
            <a href="https://linkedin.com/company/evofuse" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="footer-social-icon"><FaLinkedin /></a>
            <a href="https://facebook.com/evofuse" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="footer-social-icon"><FaFacebook /></a>
          </div>
        </div>
        <div className="footer-newsletter">
          <div className="footer-heading">NEWSLETTER</div>
          <div className="footer-newsletter-desc">Join our newsletter to stay updated on features and releases.</div>
          <form className="footer-newsletter-form" onSubmit={handleSubscribe} noValidate>
            <div className="footer-email-input-wrapper">
              <input
                type="text"
                className={`footer-email-input ${validationError ? 'footer-email-input-error' : ''}`}
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  if (validationError) {
                    setValidationError('')
                  }
                  if (status.type) {
                    setStatus({ type: null, message: '' })
                  }
                }}
                onBlur={() => {
                  const error = validateEmail(email)
                  setValidationError(error)
                }}
                disabled={isSubmitting}
              />
              {validationError && (
                <div className="footer-validation-error">{validationError}</div>
              )}
            </div>
            <button 
              type="submit" 
              className="footer-subscribe-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
          {status.type && (
            <div className={`footer-subscribe-status footer-subscribe-status-${status.type}`}>
              {status.type === 'success' ? (
                <FaCheck className="footer-subscribe-status-icon" />
              ) : status.type === 'warning' ? (
                <FaExclamationTriangle className="footer-subscribe-status-icon" />
              ) : (
                <FaTimes className="footer-subscribe-status-icon" />
              )}
              <span>{status.message}</span>
            </div>
          )}
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


