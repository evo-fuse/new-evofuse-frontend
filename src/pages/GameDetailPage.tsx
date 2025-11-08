import { useMemo, useEffect, useState, useLayoutEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useLoading } from '../contexts/LoadingContext'
import GameDetailSkeleton from '../components/GameDetailSkeleton'
import { useComingSoonModal } from '../contexts/ComingSoonModalContext'
import { FaCheck, FaWindows, FaApple, FaAndroid, FaMobileAlt, FaDownload, FaPlay, FaRocket, FaGlobe, FaDesktop, FaGamepad, FaPalette, FaTools, FaCoins, FaWallet, FaDice, FaVideo, FaRobot, FaTimes } from 'react-icons/fa'
import thumb2048 from '@thumbnails/2048.jpg'
import thumbFlappy from '@thumbnails/flappy_bird.jpg'
import thumbOthello from '@thumbnails/Othello.jpg'
import thumbCarcassonne from '@thumbnails/carcassonne.png'

const gameplayImage2048 = 'https://i.ibb.co/mkLhSvj/2048play.png'

const games: Record<string, { title: string; imageSrc: string; gameplayImage?: string; description: string; category: string; features: string[]; gameUrl?: string }> = {
  '2048': {
    title: 'EvoFuse 2048',
    imageSrc: thumb2048,
    gameplayImage: gameplayImage2048,
    description: "Experience the ultimate fusion of classic puzzle gameplay and cutting-edge blockchain with EvoFuse 2048. This revolutionary take on the beloved tile-merging game combines addictive strategic gameplay with real crypto rewards, creating an immersive PZE (Play-to-Earn) gaming experience.",
    category: 'top',
    gameUrl: 'https://2048.evofuse.xyz/game/',
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
  const { openModal } = useComingSoonModal()
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
            <Link to="/games" className="btn btn-primary" style={{ marginTop: 12 }}>Back to Game</Link>
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
            {/* Play Button aligned with download buttons */}
            <div className="game-detail-play-btn-wrapper">
              {game.gameUrl ? (
                <a 
                  href={game.gameUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary game-detail-play-btn" 
                  aria-label="Play"
                >
                  <FaPlay className="game-detail-play-btn-icon" />
                  <span>Play {game.title}</span>
                </a>
              ) : (
                <button 
                  className="btn btn-primary game-detail-play-btn" 
                  aria-label="Play"
                  onClick={() => openModal(game.title)}
                >
                  <FaPlay className="game-detail-play-btn-icon" />
                  <span>Play {game.title}</span>
                </button>
              )}
            </div>
          </div>

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
              {game.gameUrl ? (
                <a 
                  href={game.gameUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="game-detail-watch-video-btn" 
                  aria-label="Play Game"
                >
                  <FaPlay className="game-detail-watch-video-icon" />
                  <span className="game-detail-watch-video-text">Play Game</span>
                </a>
              ) : (
                <button 
                  className="game-detail-watch-video-btn" 
                  aria-label="Play Game"
                  onClick={() => openModal(game.title)}
                >
                  <FaPlay className="game-detail-watch-video-icon" />
                  <span className="game-detail-watch-video-text">Play Game</span>
                </button>
              )}
            </div>
            
            {/* Download App Buttons */}
            <div className="game-detail-download-section">
              <div className="game-detail-download-title">Download App</div>
              <div className="game-detail-download-buttons">
                <a href="#" className="game-detail-download-btn" onClick={(e) => e.preventDefault()}>
                  <div className="game-detail-download-btn-new-banner">
                    <span className="game-detail-download-btn-new-text">New</span>
                  </div>
                  <FaWindows className="game-detail-download-btn-icon" />
                  <div className="game-detail-download-btn-content">
                    <div className="game-detail-download-btn-header">
                      <span className="game-detail-download-btn-label">Windows</span>
                    </div>
                    <span className="game-detail-download-btn-subtitle">Version 1.0.0</span>
                  </div>
                  <FaDownload className="game-detail-download-icon" />
                </a>
                <a href="#" className="game-detail-download-btn" onClick={(e) => {
                  e.preventDefault()
                  openModal('Mac version')
                }}>
                  <div className="game-detail-download-btn-new-banner">
                    <span className="game-detail-download-btn-new-text">New</span>
                  </div>
                  <FaApple className="game-detail-download-btn-icon" />
                  <div className="game-detail-download-btn-content">
                    <div className="game-detail-download-btn-header">
                      <span className="game-detail-download-btn-label">Mac</span>
                    </div>
                    <span className="game-detail-download-btn-subtitle">Version 1.0.0</span>
                  </div>
                  <FaDownload className="game-detail-download-icon" />
                </a>
                <a href="#" className="game-detail-download-btn" onClick={(e) => {
                  e.preventDefault()
                  openModal('Android version')
                }}>
                  <div className="game-detail-download-btn-new-banner">
                    <span className="game-detail-download-btn-new-text">New</span>
                  </div>
                  <FaAndroid className="game-detail-download-btn-icon" />
                  <div className="game-detail-download-btn-content">
                    <div className="game-detail-download-btn-header">
                      <span className="game-detail-download-btn-label">Android</span>
                    </div>
                    <span className="game-detail-download-btn-subtitle">Version 1.0.0</span>
                  </div>
                  <FaDownload className="game-detail-download-icon" />
                </a>
                <a href="#" className="game-detail-download-btn" onClick={(e) => {
                  e.preventDefault()
                  openModal('iOS version')
                }}>
                  <div className="game-detail-download-btn-new-banner">
                    <span className="game-detail-download-btn-new-text">New</span>
                  </div>
                  <FaMobileAlt className="game-detail-download-btn-icon" />
                  <div className="game-detail-download-btn-content">
                    <div className="game-detail-download-btn-header">
                      <span className="game-detail-download-btn-label">iOS</span>
                    </div>
                    <span className="game-detail-download-btn-subtitle">Version 1.0.0</span>
                  </div>
                  <FaDownload className="game-detail-download-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Feature Comparison Table */}
        <div className="game-detail-feature-comparison">
          <h2 className="game-detail-comparison-title">Feature Comparison</h2>
          <div className="game-detail-comparison-table-wrapper">
            <table className="game-detail-comparison-table">
              <thead>
                <tr>
                  <th className="game-detail-comparison-feature-col">
                    <FaRocket className="game-detail-comparison-header-icon" />
                    <span>Feature</span>
                  </th>
                  <th className="game-detail-comparison-version-col">
                    <FaGlobe className="game-detail-comparison-header-icon" />
                    <span>Web Version</span>
                  </th>
                  <th className="game-detail-comparison-version-col">
                    <FaDesktop className="game-detail-comparison-header-icon" />
                    <span>PC App Version</span>
                  </th>
                  <th className="game-detail-comparison-version-col">
                    <FaMobileAlt className="game-detail-comparison-header-icon" />
                    <span>Mobile App Version</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="game-detail-comparison-feature-name game-detail-comparison-tooltip-wrapper">
                    <FaGamepad className="game-detail-comparison-feature-icon" />
                    <span>Core Fusion</span>
                    <div className="game-detail-comparison-tooltip">Classic 2048 gameplay with our signature evolving history theme</div>
                  </td>
                  <td className="game-detail-comparison-check"><FaCheck /></td>
                  <td className="game-detail-comparison-check"><FaCheck /></td>
                  <td className="game-detail-comparison-check"><FaCheck /></td>
                </tr>
                <tr>
                  <td className="game-detail-comparison-feature-name game-detail-comparison-tooltip-wrapper">
                    <FaPalette className="game-detail-comparison-feature-icon" />
                    <span>Theme Playground</span>
                    <div className="game-detail-comparison-tooltip">Buy, play, or even create your own themed tile sets</div>
                  </td>
                  <td className="game-detail-comparison-check"><FaCheck /></td>
                  <td className="game-detail-comparison-check"><FaCheck /></td>
                  <td className="game-detail-comparison-check"><FaCheck /></td>
                </tr>
                <tr>
                  <td className="game-detail-comparison-feature-name game-detail-comparison-tooltip-wrapper">
                    <FaTools className="game-detail-comparison-feature-icon" />
                    <span>Power Tools</span>
                    <div className="game-detail-comparison-tooltip">Smash or upgrade tiles with cool in-game items</div>
                  </td>
                  <td className="game-detail-comparison-check"><FaCheck /></td>
                  <td className="game-detail-comparison-check"><FaCheck /></td>
                  <td className="game-detail-comparison-check"><FaCheck /></td>
                </tr>
                <tr>
                  <td className="game-detail-comparison-feature-name game-detail-comparison-tooltip-wrapper">
                    <FaCoins className="game-detail-comparison-feature-icon" />
                    <span>DWAT Rush</span>
                    <div className="game-detail-comparison-tooltip">Earn real DWAT tokens with your high scores</div>
                  </td>
                  <td className="game-detail-comparison-check"><FaCheck /></td>
                  <td className="game-detail-comparison-check"><FaCheck /></td>
                  <td className="game-detail-comparison-check"><FaCheck /></td>
                </tr>
                <tr>
                  <td className="game-detail-comparison-feature-name game-detail-comparison-tooltip-wrapper">
                    <FaWallet className="game-detail-comparison-feature-icon" />
                    <span>My Vault</span>
                    <div className="game-detail-comparison-tooltip">Create & manage a crypto wallet directly in-game</div>
                  </td>
                  <td className="game-detail-comparison-cross"><FaTimes /></td>
                  <td className="game-detail-comparison-check"><FaCheck /></td>
                  <td className="game-detail-comparison-check"><FaCheck /></td>
                </tr>
                <tr>
                  <td className="game-detail-comparison-feature-name game-detail-comparison-tooltip-wrapper">
                    <FaDice className="game-detail-comparison-feature-icon" />
                    <span>Crypto Carnival</span>
                    <div className="game-detail-comparison-tooltip">Play betting games like SportBingo with DWAT</div>
                  </td>
                  <td className="game-detail-comparison-cross"><FaTimes /></td>
                  <td className="game-detail-comparison-check"><FaCheck /></td>
                  <td className="game-detail-comparison-check"><FaCheck /></td>
                </tr>
                <tr>
                  <td className="game-detail-comparison-feature-name game-detail-comparison-tooltip-wrapper">
                    <FaVideo className="game-detail-comparison-feature-icon" />
                    <span>Replay Magic</span>
                    <div className="game-detail-comparison-tooltip">Save your genius moves or learn from top players' replays</div>
                  </td>
                  <td className="game-detail-comparison-cross"><FaTimes /></td>
                  <td className="game-detail-comparison-check"><FaCheck /></td>
                  <td className="game-detail-comparison-check"><FaCheck /></td>
                </tr>
                <tr>
                  <td className="game-detail-comparison-feature-name game-detail-comparison-tooltip-wrapper">
                    <FaRobot className="game-detail-comparison-feature-icon" />
                    <span>AI Theme Wizard</span>
                    <div className="game-detail-comparison-tooltip">AI builds a whole new 2048 theme based on <em>your</em> idea!</div>
                  </td>
                  <td className="game-detail-comparison-cross"><FaTimes /></td>
                  <td className="game-detail-comparison-cross"><FaTimes /></td>
                  <td className="game-detail-comparison-coming-soon">
                    <FaCheck /> <span>(Coming Soon!)</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="game-detail-footer">
          <Link to="/games" className="btn btn-outline">Back to Game</Link>
        </div>
      </div>
    </div>
  )
}

export default GameDetailPage

