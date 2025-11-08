import { useMemo, useEffect, useState, useLayoutEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useLoading } from '../contexts/LoadingContext'
import GameDetailSkeleton from '../components/GameDetailSkeleton'
import { FaCheck, FaWindows, FaApple, FaAndroid, FaDownload, FaPlay } from 'react-icons/fa'
import thumb2048 from '@thumbnails/2048.jpg'
import thumbFlappy from '@thumbnails/flappy_bird.jpg'
import thumbOthello from '@thumbnails/Othello.jpg'
import thumbCarcassonne from '@thumbnails/carcassonne.png'

const gameplayImage2048 = 'https://i.ibb.co/mkLhSvj/2048play.png'

const games: Record<string, { title: string; imageSrc: string; gameplayImage?: string; description: string; category: string; features: string[] }> = {
  '2048': {
    title: 'EvoFuse 2048',
    imageSrc: thumb2048,
    gameplayImage: gameplayImage2048,
    description: "Experience the ultimate fusion of classic puzzle gameplay and cutting-edge blockchain with EvoFuse 2048. This revolutionary take on the beloved tile-merging game combines addictive strategic gameplay with real crypto rewards, creating an immersive PZE (Play-to-Earn) gaming experience.",
    category: 'top',
    features: [
      'Play puzzle game 2048 with crypto rewards',
      'PZE crypto games with real earnings',
      '2048 game play with blockchain integration',
      'Play game 2048 online anytime',
    ]
  },
  'othello': {
    title: 'Othello',
    imageSrc: thumbOthello,
    description: 'No quiet board game here — this is mind warfare on-chain. Outsmart, outflip, and outshine as your every move earns power, pride, and maybe a few DWAT brags.',
    category: 'coming-soon',
    features: [
      'Strategic gameplay with crypto rewards',
      'Real-time multiplayer matches',
      'Blockchain-powered achievements',
      'Competitive leaderboards',
      'NFT collectibles and rewards',
      'Secure wallet integration'
    ]
  },
  'flappy-bird': {
    title: 'Flappy Bird',
    imageSrc: thumbFlappy,
    description: "He's back — and he's learned to fly for tokens. Dodge chaos, chase destiny, and flap your way through the most ridiculous, rewarding sky in blockchain history.",
    category: 'coming-soon',
    features: [
      'Classic gameplay with crypto rewards',
      'Progressive difficulty levels',
      'Daily challenges and missions',
      'Token rewards for high scores',
      'Social sharing and competitions',
      'Cross-platform play'
    ]
  },
  'carcassonne': {
    title: 'Carcassonne',
    imageSrc: thumbCarcassonne,
    description: 'Build your medieval empire tile by tile, strategy by strategy. Every placement is a decision, every city a victory, and every game a chance to earn your place in the leaderboard.',
    category: 'coming-soon',
    features: [
      'Strategic tile placement gameplay',
      'Multiplayer support',
      'Blockchain rewards system',
      'Custom game modes',
      'Tournament competitions',
      'NFT character pieces'
    ]
  }
}

function GameDetailPage() {
  const { slug } = useParams()
  const game = useMemo(() => (slug ? games[slug.toLowerCase()] : undefined), [slug])
  const { setLoading } = useLoading()
  const [isLoading, setIsLoading] = useState(true)

  // Use useLayoutEffect to set loading state synchronously before paint
  useLayoutEffect(() => {
    setIsLoading(true)
    setLoading(true)
  }, [slug, setLoading])

  useEffect(() => {
    const t = setTimeout(() => {
      setIsLoading(false)
      setLoading(false)
    }, 1000)
    
    return () => {
      clearTimeout(t)
      setIsLoading(false)
      setLoading(false)
    }
  }, [slug, setLoading])

  if (!game) {
    return (
      <div className="game-detail-page">
        <div className="container">
          <section className="section">
            <h2 className="section-title">Game not found</h2>
            <p>We couldn't find the game you're looking for.</p>
            <Link to="/games" className="btn btn-primary" style={{ marginTop: 12 }}>Back to Games</Link>
          </section>
        </div>
      </div>
    )
  }

  if (isLoading) {
    return <GameDetailSkeleton />
  }

  return (
    <div className="game-detail-page">
      <div className="game-detail-container">
        <div className="game-detail-layout">
          {/* Left Panel - Game Introduction */}
          <div className="game-detail-intro">
            <h1 className="game-detail-title">{game.title}</h1>
            <p className="game-detail-tagline">{game.description}</p>
            <div className="game-detail-separator"></div>
            <div className="game-detail-features">
              {game.features.map((feature, index) => (
                <div key={index} className="game-detail-feature-item">
                  <FaCheck className="game-detail-feature-check" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Play Button at Bottom Border */}
          <button className="btn btn-primary game-detail-play-btn" aria-label="Play">
            Play {game.title}
          </button>

          {/* Right Panel - Game Interface */}
          <div className="game-detail-interface">
            <div className="game-detail-interface-border-progress">
              <div className="game-detail-interface-progress-fill"></div>
            </div>
            <div className="game-detail-gameplay">
              <img 
                src={game.gameplayImage || game.imageSrc} 
                alt={`${game.title} gameplay`} 
                className="game-detail-gameplay-image"
              />
              <button className="game-detail-watch-video-btn" aria-label="Play Game">
                <FaPlay className="game-detail-watch-video-icon" />
                <span className="game-detail-watch-video-text">Play Game</span>
              </button>
            </div>
            
            {/* Download App Buttons */}
            <div className="game-detail-download-section">
              <div className="game-detail-download-title">Download App</div>
              <div className="game-detail-download-buttons">
                <a href="#" className="game-detail-download-btn" onClick={(e) => e.preventDefault()}>
                  <FaWindows className="game-detail-download-btn-icon" />
                  <div className="game-detail-download-btn-content">
                    <div className="game-detail-download-btn-header">
                      <span className="game-detail-download-btn-label">Windows</span>
                      <span className="game-detail-download-btn-new">New</span>
                    </div>
                    <span className="game-detail-download-btn-subtitle">Version 2.1.4</span>
                    <span className="game-detail-download-btn-version">Latest Release</span>
                  </div>
                  <FaDownload className="game-detail-download-icon" />
                </a>
                <a href="#" className="game-detail-download-btn" onClick={(e) => e.preventDefault()}>
                  <FaApple className="game-detail-download-btn-icon" />
                  <div className="game-detail-download-btn-content">
                    <div className="game-detail-download-btn-header">
                      <span className="game-detail-download-btn-label">Mac</span>
                    </div>
                    <span className="game-detail-download-btn-subtitle">Version 2.1.3</span>
                    <span className="game-detail-download-btn-version">macOS 10.15+</span>
                  </div>
                  <FaDownload className="game-detail-download-icon" />
                </a>
                <a href="#" className="game-detail-download-btn" onClick={(e) => e.preventDefault()}>
                  <FaAndroid className="game-detail-download-btn-icon" />
                  <div className="game-detail-download-btn-content">
                    <div className="game-detail-download-btn-header">
                      <span className="game-detail-download-btn-label">Android</span>
                      <span className="game-detail-download-btn-new">New</span>
                    </div>
                    <span className="game-detail-download-btn-subtitle">Version 2.1.5</span>
                    <span className="game-detail-download-btn-version">Android 8.0+</span>
                  </div>
                  <FaDownload className="game-detail-download-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="game-detail-footer">
          <Link to="/games" className="btn btn-outline">Back to Games</Link>
        </div>
      </div>
    </div>
  )
}

export default GameDetailPage

