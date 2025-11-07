import { useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaPlay } from 'react-icons/fa'
import thumb2048 from '@thumbnails/2048.jpg'
import thumbFlappy from '@thumbnails/flappy_bird.jpg'
import thumbOthello from '@thumbnails/Othelo.jpg'
import thumbCarcassonne from '@thumbnails/carcassonne.png'

function GameBanner({ title, subtitle, imageSrc, description }: { title: string; subtitle: string; imageSrc: string; description: string }) {
  return (
    <div className="game-item">
      <div className="game-banner">
        <img className="game-banner-img" src={imageSrc} alt={title} />
      </div>
      <div className="game-banner-info">
        <div className="game-title">{title}</div>
        <div className="game-subtitle">{subtitle}</div>
        <div className="game-separator"></div>
        <div className="game-description">{description}</div>
      </div>
      <div className="game-banner-cta">
        <button className="btn btn-primary" aria-label="Play">
          <FaPlay/>
          Play
        </button>
      </div>
    </div>
  )
}

function FeaturedGames({ limit }: { limit?: number }) {
  const allGames = [
    { 
      title: '2048', 
      subtitle: 'Play & Earn', 
      imageSrc: thumb2048, 
      popularity: 5,
      description: "Forget the old math game — this is evolution gone wild. Tiles fuse, worlds unfold, and every merge writes a new chapter of your journey. Welcome to the 2048 that actually *means* something."
    },
    { 
      title: 'Othello', 
      subtitle: 'Crypto Kings', 
      imageSrc: thumbOthello, 
      popularity: 4,
      description: 'No quiet board game here — this is mind warfare on-chain. Outsmart, outflip, and outshine as your every move earns power, pride, and maybe a few DWAT brags.'
    },
    { 
      title: 'Flappy Bird', 
      subtitle: 'Crypto Flight', 
      imageSrc: thumbFlappy, 
      popularity: 3,
      description: "He's back — and he's learned to fly for tokens. Dodge chaos, chase destiny, and flap your way through the most ridiculous, rewarding sky in blockchain history."
    },
    { 
      title: 'Carcassonne', 
      subtitle: 'Strategic Build', 
      imageSrc: thumbCarcassonne, 
      popularity: 2,
      description: 'Build your medieval empire tile by tile, strategy by strategy. Every placement is a decision, every city a victory, and every game a chance to earn your place in the leaderboard.'
    },
  ]

  const itemsPerPage = 6
  const [currentPage, setCurrentPage] = useState(1)

  const sortedGames = [...allGames].sort((a, b) => b.popularity - a.popularity)

  if (limit) {
    const games = sortedGames.slice(0, limit)
    return (
      <section className="section">
        <h2 className="section-title">Top Games</h2>
        <div className="card-grid">
          {games.map((game, index) => (
            <GameBanner key={index} title={game.title} subtitle={game.subtitle} imageSrc={game.imageSrc} description={game.description} />
          ))}
        </div>
      </section>
    )
  }

  const totalPages = Math.ceil(sortedGames.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const games = sortedGames.slice(startIndex, endIndex)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section className="section">
      <h2 className="section-title">Top Games</h2>
      <div className="card-grid">
        {games.map((game, index) => (
          <GameBanner key={index} title={game.title} subtitle={game.subtitle} imageSrc={game.imageSrc} description={game.description} />
        ))}
      </div>
      {totalPages > 1 && (
        <div className="pagination">
          <button 
            className="pagination-btn" 
            onClick={() => handlePageChange(currentPage - 1)} 
            disabled={currentPage === 1}
            aria-label="Previous page"
          >
            <FaChevronLeft />
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`pagination-page ${currentPage === page ? 'active' : ''}`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          ))}
          <button 
            className="pagination-btn" 
            onClick={() => handlePageChange(currentPage + 1)} 
            disabled={currentPage === totalPages}
            aria-label="Next page"
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </section>
  )
}

export default FeaturedGames


