import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaChevronLeft, FaChevronRight, FaPlay } from 'react-icons/fa'
import { useComingSoonModal } from '../contexts/ComingSoonModalContext'
import thumb2048 from '@thumbnails/2048.jpg'
import thumbFlappy from '@thumbnails/flappy_bird.jpg'
import thumbOthello from '@thumbnails/Othello.jpg'
import thumbCarcassonne from '@thumbnails/carcassonne.png'

function GameBanner({ title, imageSrc, description, slug, category }: { title: string; imageSrc: string; description: string; slug: string; category: 'top' | 'coming-soon' }) {
  const isComingSoon = category === 'coming-soon'
  const { openModal } = useComingSoonModal()
  
  const handleComingSoonClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    openModal(title)
  }
  
  const handleBannerClick = (e: React.MouseEvent) => {
    if (isComingSoon) {
      e.preventDefault()
      e.stopPropagation()
      openModal(title)
    }
  }
  
  const bannerContent = (
    <>
      <div className="game-banner" onClick={isComingSoon ? handleBannerClick : undefined}>
        <img className="game-banner-img" src={imageSrc} alt={title} />
      </div>
      <div className="game-banner-info">
        <div className="game-title">{title}</div>
        <div className="game-separator"></div>
        <div className="game-description">{description}</div>
      </div>
      {/* <div className="game-banner-cta">
        {isComingSoon ? (
          <div className="btn btn-secondary" aria-label="Coming Soon" onClick={handleComingSoonClick}>
            Coming Soon
          </div>
        ) : (
          <div className="btn btn-primary" aria-label="Play">
            <FaPlay/>
            Go
          </div>
        )}
      </div> */}
    </>
  )
  
  if (isComingSoon) {
    return (
      <div className="game-item" style={{ textDecoration: 'none', cursor: 'pointer' }} onClick={handleBannerClick}>
        {bannerContent}
      </div>
    )
  }
  
  return (
    <Link to={`/game/${slug}`} className="game-item" style={{ textDecoration: 'none' }}>
      {bannerContent}
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
      category: 'coming-soon' as const,
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

  if (limit) {
    const games = topGames.slice(0, limit)
    return (
      <>
        <section className="section">
          <h2 className="section-title" style={{ margin: 0 }}>Top Games</h2>
          <div className="card-grid">
            {games.map((game, index) => (
              <GameBanner key={index} title={game.title} imageSrc={game.imageSrc} description={game.description} slug={game.slug} category={game.category} />
            ))}
          </div>
        </section>
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
            <GameBanner key={index} title={game.title} imageSrc={game.imageSrc} description={game.description} slug={game.slug} category={game.category} />
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
            <GameBanner key={index} title={game.title} imageSrc={game.imageSrc} description={game.description} slug={game.slug} category={game.category} />
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
    </>
  )
}

export default FeaturedGames


