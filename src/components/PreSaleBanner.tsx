import { useState, useEffect } from 'react'
import { FaMinus, FaPlus, FaTimes, FaShoppingCart } from 'react-icons/fa'

function PreSaleBanner() {
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 12,
    minutes: 34,
    seconds: 56
  })
  const [isMinimized, setIsMinimized] = useState(false)
  const [isClosed, setIsClosed] = useState(false)
  const [animatedTotalSupply, setAnimatedTotalSupply] = useState(0)
  const [animatedSoldTokens, setAnimatedSoldTokens] = useState(0)
  const [animatedProgress, setAnimatedProgress] = useState(0)

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

  // Presale progress (example: 65% sold)
  const totalTokenSupply = 1000000
  const soldTokens = 650000
  const presaleProgress = Math.round((soldTokens / totalTokenSupply) * 100)
  const radius = 50
  const circumference = 2 * Math.PI * radius

  // Animation for numbers and progress ring
  useEffect(() => {
    if (isMinimized) return

    const duration = 2000 // 2 seconds
    const steps = 60
    const stepDuration = duration / steps
    const totalSupplyStep = totalTokenSupply / steps
    const soldTokensStep = soldTokens / steps
    const progressStep = presaleProgress / steps

    let currentStep = 0
    const animationTimer = setInterval(() => {
      currentStep++
      if (currentStep <= steps) {
        setAnimatedTotalSupply(Math.min(Math.round(currentStep * totalSupplyStep), totalTokenSupply))
        setAnimatedSoldTokens(Math.min(Math.round(currentStep * soldTokensStep), soldTokens))
        setAnimatedProgress(Math.min(Math.round(currentStep * progressStep), presaleProgress))
      } else {
        clearInterval(animationTimer)
      }
    }, stepDuration)

    return () => clearInterval(animationTimer)
  }, [isMinimized, totalTokenSupply, soldTokens, presaleProgress])

  const offset = circumference - (animatedProgress / 100) * circumference

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
            {isMinimized ? <FaPlus /> : <FaMinus />}
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
            <h2 className="presale-banner-title">TOKEN PRE-SALE</h2>
            <div className="presale-token-info">
              <div className="presale-token-supply">
                <span className="presale-token-label">Total Supply:</span>
                <span className="presale-token-value animate-number">{animatedTotalSupply.toLocaleString()}</span>
              </div>
              <div className="presale-token-sold">
                <span className="presale-token-label">Sold:</span>
                <span className="presale-token-value animate-number">{animatedSoldTokens.toLocaleString()}</span>
              </div>
            </div>
            <div className="presale-progress-ring">
              <svg className="presale-ring-svg" viewBox="0 0 120 120" preserveAspectRatio="xMidYMid meet">
                <circle
                  className="presale-ring-track"
                  cx="60"
                  cy="60"
                  r={radius}
                  fill="none"
                  strokeWidth="8"
                />
                <circle
                  className="presale-ring-progress"
                  cx="60"
                  cy="60"
                  r={radius}
                  fill="none"
                  strokeWidth="8"
                  strokeDasharray={circumference}
                  strokeDashoffset={offset}
                  transform="rotate(-90 60 60)"
                />
              </svg>
              <div className="presale-ring-center">
                <div className="presale-ring-percentage animate-number">{animatedProgress}%</div>
                <div className="presale-ring-label">SOLD</div>
              </div>
            </div>
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
              <button className="btn btn-primary presale-btn-primary">
                <FaShoppingCart className="presale-btn-icon" />
                <span>Buy Tokens</span>
              </button>
              {/* <button className="btn btn-outline presale-btn-secondary">Pre-Order Games</button> */}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default PreSaleBanner

