import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaChevronLeft, FaChevronRight, FaPlay, FaTimes } from 'react-icons/fa'
import thumb2048 from '@thumbnails/2048.jpg'
import thumbFlappy from '@thumbnails/flappy_bird.jpg'
import thumbOthello from '@thumbnails/Othello.jpg'
import thumbCarcassonne from '@thumbnails/carcassonne.png'

function GameBanner({ title, imageSrc, description, slug, category, onComingSoonClick }: { title: string; imageSrc: string; description: string; slug: string; category: 'top' | 'coming-soon'; onComingSoonClick?: () => void }) {
  const isComingSoon = category === 'coming-soon'
  
  const handleComingSoonClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (onComingSoonClick) {
      onComingSoonClick()
    }
  }
  
  return (
    <Link to={`/game/${slug}`} className="game-item" style={{ textDecoration: 'none' }}>
      <div className="game-banner">
        <img className="game-banner-img" src={imageSrc} alt={title} />
      </div>
      <div className="game-banner-info">
        <div className="game-title">{title}</div>
        <div className="game-separator"></div>
        <div className="game-description">{description}</div>
      </div>
      <div className="game-banner-cta">
        {isComingSoon ? (
          <div className="btn btn-secondary" aria-label="Coming Soon" onClick={handleComingSoonClick}>
            Coming Soon
          </div>
        ) : (
          <div className="btn btn-primary" aria-label="Play">
            <FaPlay/>
            Play
          </div>
        )}
      </div>
    </Link>
  )
}

function FeaturedGames({ limit }: { limit?: number }) {
  const allGames = [
    { 
      title: '2048', 
      subtitle: 'Play & Earn', 
      imageSrc: thumb2048, 
      popularity: 5,
      category: 'top' as const,
      slug: '2048',
      description: "Forget the old math game — this is evolution gone wild. Tiles fuse, worlds unfold, and every merge writes a new chapter of your journey. Welcome to the 2048 that actually means something."
    },
    { 
      title: 'Othello', 
      subtitle: 'Crypto Kings', 
      imageSrc: thumbOthello, 
      popularity: 4,
      category: 'top' as const,
      slug: 'othello',
      description: 'No quiet board game here — this is mind warfare on-chain. Outsmart, outflip, and outshine as your every move earns power, pride, and maybe a few DWAT brags.'
    },
    { 
      title: 'Flappy Bird', 
      subtitle: 'Crypto Flight', 
      imageSrc: thumbFlappy, 
      popularity: 3,
      category: 'coming-soon' as const,
      slug: 'flappy-bird',
      description: "He's back — and he's learned to fly for tokens. Dodge chaos, chase destiny, and flap your way through the most ridiculous, rewarding sky in blockchain history."
    },
    { 
      title: 'Carcassonne', 
      subtitle: 'Strategic Build', 
      imageSrc: thumbCarcassonne, 
      popularity: 2,
      category: 'coming-soon' as const,
      slug: 'carcassonne',
      description: 'Build your medieval empire tile by tile, strategy by strategy. Every placement is a decision, every city a victory, and every game a chance to earn your place in the leaderboard.'
    },
  ]

  // Group games by category
  const topGames = allGames.filter(game => game.category === 'top').sort((a, b) => b.popularity - a.popularity)
  const comingSoonGames = allGames.filter(game => game.category === 'coming-soon').sort((a, b) => b.popularity - a.popularity)

  const itemsPerPage = 6
  const [currentPage, setCurrentPage] = useState(1)
  const [currentPageComingSoon, setCurrentPageComingSoon] = useState(1)
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedGame, setSelectedGame] = useState<string | null>(null)

  const handleComingSoonClick = (gameTitle: string) => {
    setSelectedGame(gameTitle)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
    setSelectedGame(null)
  }

  if (limit) {
    const games = topGames.slice(0, limit)
    return (
      <>
        <section className="section">
          <h2 className="section-title" style={{ margin: 0 }}>Top Games</h2>
          <div className="card-grid">
            {games.map((game, index) => (
              <GameBanner key={index} title={game.title} imageSrc={game.imageSrc} description={game.description} slug={game.slug} category={game.category} onComingSoonClick={() => handleComingSoonClick(game.title)} />
            ))}
          </div>
        </section>
        
        {/* Coming Soon Modal */}
        {modalOpen && (
          <div className="coming-soon-modal-overlay" onClick={closeModal}>
            <div className="coming-soon-modal" onClick={(e) => e.stopPropagation()}>
              <button className="coming-soon-modal-close" onClick={closeModal} aria-label="Close">
                <FaTimes />
              </button>
              <div className="coming-soon-modal-content">
                <h2 className="coming-soon-modal-title">Coming Soon</h2>
                <p className="coming-soon-modal-game">{selectedGame}</p>
                <p className="coming-soon-modal-message">
                  We're working hard to bring you an amazing gaming experience. Stay tuned for updates!
                </p>
                <button className="btn btn-primary coming-soon-modal-btn" onClick={closeModal}>
                  Got it
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    )
  }

  const topTotalPages = Math.ceil(topGames.length / itemsPerPage)
  const topStartIndex = (currentPage - 1) * itemsPerPage
  const topEndIndex = topStartIndex + itemsPerPage
  const topGamesPage = topGames.slice(topStartIndex, topEndIndex)

  const comingSoonTotalPages = Math.ceil(comingSoonGames.length / itemsPerPage)
  const comingSoonStartIndex = (currentPageComingSoon - 1) * itemsPerPage
  const comingSoonEndIndex = comingSoonStartIndex + itemsPerPage
  const comingSoonGamesPage = comingSoonGames.slice(comingSoonStartIndex, comingSoonEndIndex)

  const handleTopPageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleComingSoonPageChange = (page: number) => {
    setCurrentPageComingSoon(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <section className="section">
        <h2 className="section-title" style={{ margin: 0 }}>Top Games</h2>
        <div className="card-grid">
          {topGamesPage.map((game, index) => (
            <GameBanner key={index} title={game.title} imageSrc={game.imageSrc} description={game.description} slug={game.slug} category={game.category} onComingSoonClick={() => handleComingSoonClick(game.title)} />
          ))}
        </div>
        {topTotalPages > 1 && (
          <div className="pagination">
            <button 
              className="pagination-btn" 
              onClick={() => handleTopPageChange(currentPage - 1)} 
              disabled={currentPage === 1}
              aria-label="Previous page"
            >
              <FaChevronLeft />
            </button>
            {Array.from({ length: topTotalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                className={`pagination-page ${currentPage === page ? 'active' : ''}`}
                onClick={() => handleTopPageChange(page)}
              >
                {page}
              </button>
            ))}
            <button 
              className="pagination-btn" 
              onClick={() => handleTopPageChange(currentPage + 1)} 
              disabled={currentPage === topTotalPages}
              aria-label="Next page"
            >
              <FaChevronRight />
            </button>
          </div>
        )}
      </section>
      
      <div className="section-separator"></div>
      
      <section className="section">
        <h2 className="section-title" style={{ margin: 0 }}>Coming Soon</h2>
        <div className="card-grid">
          {comingSoonGamesPage.map((game, index) => (
            <GameBanner key={index} title={game.title} imageSrc={game.imageSrc} description={game.description} slug={game.slug} category={game.category} onComingSoonClick={() => handleComingSoonClick(game.title)} />
          ))}
        </div>
        {comingSoonTotalPages > 1 && (
          <div className="pagination">
            <button 
              className="pagination-btn" 
              onClick={() => handleComingSoonPageChange(currentPageComingSoon - 1)} 
              disabled={currentPageComingSoon === 1}
              aria-label="Previous page"
            >
              <FaChevronLeft />
            </button>
            {Array.from({ length: comingSoonTotalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                className={`pagination-page ${currentPageComingSoon === page ? 'active' : ''}`}
                onClick={() => handleComingSoonPageChange(page)}
              >
                {page}
              </button>
            ))}
            <button 
              className="pagination-btn" 
              onClick={() => handleComingSoonPageChange(currentPageComingSoon + 1)} 
              disabled={currentPageComingSoon === comingSoonTotalPages}
              aria-label="Next page"
            >
              <FaChevronRight />
            </button>
          </div>
        )}
      </section>

      {/* Coming Soon Modal */}
      {modalOpen && (
        <div className="coming-soon-modal-overlay" onClick={closeModal}>
          <div className="coming-soon-modal" onClick={(e) => e.stopPropagation()}>
            <button className="coming-soon-modal-close" onClick={closeModal} aria-label="Close">
              <FaTimes />
            </button>
            <div className="coming-soon-modal-content">
              <h2 className="coming-soon-modal-title">Coming Soon</h2>
              <p className="coming-soon-modal-game">{selectedGame}</p>
              <p className="coming-soon-modal-message">
                We're working hard to bring you an amazing gaming experience. Stay tuned for updates!
              </p>
              <button className="btn btn-primary coming-soon-modal-btn" onClick={closeModal}>
                Got it
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default FeaturedGames


