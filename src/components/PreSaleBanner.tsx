import { useState, useEffect } from 'react'
import { FaMinus, FaTimes } from 'react-icons/fa'

function PreSaleBanner() {
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 12,
    minutes: 34,
    seconds: 56
  })
  const [isMinimized, setIsMinimized] = useState(false)
  const [isClosed, setIsClosed] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev
        
        if (seconds > 0) {
          seconds--
        } else if (minutes > 0) {
          minutes--
          seconds = 59
        } else if (hours > 0) {
          hours--
          minutes = 59
          seconds = 59
        } else if (days > 0) {
          days--
          hours = 23
          minutes = 59
          seconds = 59
        }
        
        return { days, hours, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (value: number) => {
    return value.toString().padStart(2, '0')
  }

  if (isClosed) {
    return null
  }

  return (
    <div className={`presale-banner ${isMinimized ? 'presale-banner-minimized' : ''}`}>
      <div className="presale-banner-content">
        <div className="presale-banner-controls">
          <button 
            className="presale-control-btn" 
            onClick={() => setIsMinimized(!isMinimized)}
            aria-label={isMinimized ? 'Expand' : 'Minimize'}
          >
            <FaMinus />
          </button>
          <button 
            className="presale-control-btn" 
            onClick={() => setIsClosed(true)}
            aria-label="Close"
          >
            <FaTimes />
          </button>
        </div>
        {!isMinimized && (
          <>
            <h2 className="presale-banner-title">TOKEN & GAME PRE-SALE</h2>
          </>
        )}
        <div className="presale-banner-timer">
          <div className="presale-timer-item">
            <div className="presale-timer-label">DAYS</div>
            <div className="presale-timer-value">{formatTime(timeLeft.days)}</div>
          </div>
          <div className="presale-timer-separator">:</div>
          <div className="presale-timer-item">
            <div className="presale-timer-label">HRS</div>
            <div className="presale-timer-value">{formatTime(timeLeft.hours)}</div>
          </div>
          <div className="presale-timer-separator">:</div>
          <div className="presale-timer-item">
            <div className="presale-timer-label">MINS</div>
            <div className="presale-timer-value">{formatTime(timeLeft.minutes)}</div>
          </div>
          <div className="presale-timer-separator">:</div>
          <div className="presale-timer-item">
            <div className="presale-timer-label">SECS.</div>
            <div className="presale-timer-value">{formatTime(timeLeft.seconds)}</div>
          </div>
        </div>
        {!isMinimized && (
          <>
            
            <p className="presale-banner-description">
              Limited time opportunity!<br/> Get early access and bonus tokens.
            </p>

            <div className="presale-banner-buttons">
              <button className="btn btn-primary presale-btn-primary">Buy Tokens</button>
              {/* <button className="btn btn-outline presale-btn-secondary">Pre-Order Games</button> */}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default PreSaleBanner

