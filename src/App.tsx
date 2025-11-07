import { useState, useEffect } from 'react'
import './App.css'
import thumb2048 from '@thumbnails/2048.jpg'
import thumbFlappy from '@thumbnails/flappy_bird.jpg'
import thumbOthello from '@thumbnails/othelo.jpg'
import thumbCarcassonne from '@thumbnails/carcassonne.png'
import slideRunning from '@slides/running.png'
import slideImagine from '@slides/imaginzation.png'
import slideSell from '@slides/sell.png'
import slideTree from '@slides/tree.png'
import slideGround from '@slides/ground.png'
import slideMac from '@slides/mac.png'
import blog1 from '@assets/blog/1.png'
import blog2 from '@assets/blog/2.png'
import blog3 from '@assets/blog/3.png'
import blog4 from '@assets/blog/4.png'
import blog5 from '@assets/blog/5.png'
import blog6 from '@assets/blog/6.png'
import siteLogo from '@assets/logo.png'
import { FaTwitter, FaDiscord, FaLinkedin, FaMusic, FaGamepad, FaRegComments, FaHome, FaTrophy, FaCoins, FaBlog, FaChartLine, FaRocket, FaAward, FaPlay, FaServer, FaStar, FaShieldAlt, FaUser, FaYoutube, FaBookOpen } from 'react-icons/fa'
import { FaTiktok } from 'react-icons/fa6'

// type TabKey = 'Home' | 'Games' | 'Blog' | 'Leaderboar' | 'TOKENOMICS'
type TabKey = 'Home' | 'Games' | 'Blog' | 'Leaderboard'

function App() {
  // const [activeTab, setActiveTab] = useState<'Home' | 'Games' | 'Blog' | 'Leaderboar' | 'TOKENOMICS'>('Home')
  const [activeTab, setActiveTab] = useState<TabKey>('Home')

  return (
    <div className="page">
      <UserBar />
      <HeroSlideshow />
      <div className="content-shell">
        <HeroTabs active={activeTab} setActive={setActiveTab} />
        <main className="container">
          <TabContent activeTab={activeTab} />
        </main>
      </div>

      <Footer />
    </div>
  )
}

function UserBar() {
  return (
    <div className="user-bar">
      <div className="user container">
        <div className="brand">
          <img className="logo-img" src={siteLogo} alt="EvoFuse" />
          <div className="brand-text">
            <div className="brand-title">EVOFUSE</div>
            <div className="brand-sub">GAMES</div>
          </div>
        </div>
        {/* <div className="user-actions">
          <button className="btn btn-outline small btn-chip">Sign in</button>
          <button className="btn btn-primary small btn-glow">Sign up</button>
        </div> */}
      </div>
    </div>
  )
}

function HeroTabs({ active, setActive }: { active: TabKey; setActive: (tab: TabKey) => void }) {
  const tabs: Array<{ key: TabKey; label: string; icon: React.ReactNode }> = [
    { key: 'Home', label: 'Home', icon: <FaHome className="icon" /> },
    { key: 'Games', label: 'Games', icon: <FaGamepad className="icon" /> },
    { key: 'Blog', label: 'Blog', icon: <FaBlog className="icon" /> },
    { key: 'Leaderboard', label: 'Leaderboard', icon: <FaTrophy className="icon" /> },
    // { key: 'TOKENOMICS', label: 'Tokenomics', icon: <FaCoins className="icon" /> },
  ]

  return (
    <div className="tabs-bar">
      <div className="tabs container">
        {tabs.map((t) => (
          <button key={t.key} title={t.label} className={`tab ${active === t.key ? 'active' : ''}`} onClick={() => setActive(t.key)}>
            {t.icon}
            <span className="label">{t.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

function TabContent({ activeTab }: { activeTab: TabKey }) {
  return (
    <div className="tab-content-wrapper">
      <div className={`tab-panel ${activeTab === 'Home' ? 'active' : ''}`}>
        <FeaturedGames limit={3} />
        {/* <TokenPreSale /> */}
        <LatestBlogPosts limit={3} />
      </div>
      <div className={`tab-panel ${activeTab === 'Games' ? 'active' : ''}`}>
        <FeaturedGames />
      </div>
      <div className={`tab-panel ${activeTab === 'Blog' ? 'active' : ''}`}>
        <LatestBlogPosts />
      </div>
      <div className={`tab-panel ${activeTab === 'Leaderboard' ? 'active' : ''}`}>
        <Leaderboard />
      </div>
      {/* <div className={`tab-panel ${activeTab === 'TOKENOMICS' ? 'active' : ''}`}>
        <TokenPreSale />
        <section className="section">
          <h2 className="section-title">Tokenomics</h2>
          <div style={{ padding: '40px', textAlign: 'center', opacity: 0.8 }}>
            Tokenomics details coming soon...
          </div>
        </section>
      </div> */}
    </div>
  )
}

function HeroSlideshow() {
  const slides = [
    { src: slideRunning, title: 'EvoFuse: Classic Games Reborn on the Blockchain', desc: 'Rediscover your favorite games through a modern Web3 lens—EvoFuse merges nostalgic gameplay with real token rewards on the Fuse Network.', badge: 'Web3 Gaming', cta: 'Explore Games' },
    { src: slideImagine, title: 'One Ecosystem, Endless Games', desc: 'From 2048 to future classics like Othello and Flappybird, EvoFuse brings them all together in a unified, reward-powered arcade experience.', badge: 'Arcade', cta: 'Play Now' },
    { src: slideSell, title: 'Earn While You Play with DWAT', desc: 'Your skills are your currency—achieve high scores, unlock milestones, and get rewarded with DWAT tokens you can use across the platform.', badge: 'Earn Rewards', cta: 'Start Earning' },
    { src: slideTree, title: 'Fully Customizable, Truly Yours', desc: 'Everything in EvoFuse can be tailored—create your own themes, tweak gameplay mechanics, and even design new experiences to share or sell.', badge: 'Customize', cta: 'Create Now' },
    { src: slideGround, title: 'Share, Compete, and Learn Together', desc: 'Record and replay every move, study top players, and join a growing social hub where games become stories and strategies are shared.', badge: 'Community', cta: 'Join Now' },
    { src: slideMac, title: 'The Future is Player-Owned', desc: 'With betting games, NFTs, and a creator-driven economy on the horizon, EvoFuse is building the next-generation Web3 arcade—powered by you.', badge: 'Future', cta: 'Learn More' },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [slides.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length)
  }

  return (
    <div className="hero-slideshow">
      <div className="slideshow-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? 'active' : ''} ${index % 2 === 1 ? 'reverse' : ''}`}
          >
            <div className="slide-inner">
              <img src={slide.src} alt={slide.title} />
              <div className="slide-caption">
                {/* <div className="badge">{slide.badge}</div> */}
                <div className="title">{slide.title}</div>
                <div className="slide-separator"></div>
                <div className="desc">{slide.desc}</div>
                {/* <div className="slide-actions">
                  <button className="btn btn-primary cta">{slide.cta}</button>
                  <button className="btn btn-outline cta alt">Learn More</button>
                </div> */}
              </div>
            </div>
          </div>
        ))}
        <button className="slide-nav slide-prev" onClick={goToPrevious} aria-label="Previous slide">
          ‹
        </button>
        <button className="slide-nav slide-next" onClick={goToNext} aria-label="Next slide">
          ›
        </button>
      </div>
      <div className="slide-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

function FeaturedGames({ limit }: { limit?: number }) {
  const allGames = [
    { title: "2048", subtitle: "Play & Earn", imageSrc: thumb2048, popularity: 5 },
    { title: "Othello", subtitle: "Crypto Kings", imageSrc: thumbOthello, popularity: 4 },
    { title: "Flappy Bird", subtitle: "Crypto Flight", imageSrc: thumbFlappy, popularity: 3 },
    { title: "Carcassonne", subtitle: "Strategic Build", imageSrc: thumbCarcassonne, popularity: 2 },
  ]
  
  // Sort by popularity and limit
  const games = limit 
    ? [...allGames].sort((a, b) => b.popularity - a.popularity).slice(0, limit)
    : allGames

  return (
    <section className="section">
      <h2 className="section-title">Featured Games</h2>
      <div className="card-grid">
        {games.map((game, index) => (
          <GameBanner key={index} title={game.title} subtitle={game.subtitle} imageSrc={game.imageSrc} />
        ))}
      </div>
    </section>
  )
}

type GameBannerProps = { title: string; subtitle: string; imageSrc: string }

function GameBanner({ title, subtitle, imageSrc }: GameBannerProps) {
  return (
    <div className="game-item">
      <div className="game-banner">
        <img className="game-banner-img" src={imageSrc} alt={title} />
      </div>
      <div className="game-banner-info">
        <div className="game-title">{title}</div>
        <div className="game-subtitle">{subtitle}</div>
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

// function TokenPreSale() {
//   // Demo deadline: 3 days, 12 hours, 34 minutes from now
//   const [target] = useState(() => Date.now() + ((3 * 24 + 12) * 60 + 34) * 60 * 1000)
//   const [now, setNow] = useState(Date.now())
//   const [saleProgress, setSaleProgress] = useState(0)
//   const saleProgressTarget = 75

//   useEffect(() => {
//     const id = setInterval(() => setNow(Date.now()), 1000)
//     return () => clearInterval(id)
//   }, [])

//   // Animate sale progress to target
//   useEffect(() => {
//     if (saleProgress >= saleProgressTarget) return
//     const step = () => setSaleProgress((p) => Math.min(saleProgressTarget, p + 1))
//     const t = setTimeout(step, 20)
//     return () => clearTimeout(t)
//   }, [saleProgress, saleProgressTarget])

//   const remainingMs = Math.max(0, target - now)
//   const totalSeconds = Math.floor(remainingMs / 1000)
//   const days = Math.floor(totalSeconds / (24 * 3600))
//   const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600)
//   const minutes = Math.floor((totalSeconds % 3600) / 60)
//   const seconds = totalSeconds % 60

//   // Progress for rings
//   const pctDays = ((days % 30) / 30) * 100
//   const pctHours = (hours / 24) * 100
//   const pctMinutes = (minutes / 60) * 100
//   const pctSeconds = (seconds / 60) * 100

//   return (
//     <section className="section presale-timer">
//       <div className="presale-heading">
//         <div className="presale-kicker">PLAY, EARN AND OWN YOUR GAMES!</div>
//       </div>

//       <div className="timer-grid">
//         <TimerRing value={days} label="DAYS" pct={pctDays} />
//         <TimerRing value={hours} label="HRS" pct={pctHours} highlight />
//         <TimerRing value={minutes} label="MINS" pct={pctMinutes} />
//         <TimerRing value={seconds} label="SECS" pct={pctSeconds} small />
//       </div>

//       <div className="timer-cta">
//         <button className="btn btn-primary">BUY TOKENS NOW</button>
//       </div>

//       <div className="sale-progress">
//         <div className="sale-top">
//           <span className="sale-label">Pre‑Sale Goal</span>
//           <span className="sale-value">{saleProgress}% Sold</span>
//         </div>
//         <div className="progress-track" aria-valuemin={0} aria-valuemax={100} aria-valuenow={saleProgress} role="progressbar">
//           <div className="progress-fill" style={{ width: `${saleProgress}%` }} />
//         </div>
//       </div>
//     </section>
//   )
// }

// function TimerRing({ value, label, pct, highlight, small }: { value: number; label: string; pct: number; highlight?: boolean; small?: boolean }) {
//   const display = String(Math.max(0, value)).padStart(2, '0')
//   const size = small ? 150 : 180
//   const stroke = 12 // thinner stroke
//   const radius = (size - stroke) / 2
//   const circumference = 2 * Math.PI * radius
//   const dashOffset = circumference * (1 - pct / 100)

//   return (
//     <div className={`ring ${highlight ? 'ring-highlight' : ''} ${small ? 'ring-small' : ''}`} style={{ ['--size' as any]: `${size}px` }}>
//       <svg className="ring-svg" width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden>
//         <circle className="ring-track" cx={size / 2} cy={size / 2} r={radius} strokeWidth={stroke} strokeLinecap="round" />
//         <circle
//           className="ring-progress"
//           cx={size / 2}
//           cy={size / 2}
//           r={radius}
//           strokeWidth={stroke}
//           strokeDasharray={circumference}
//           strokeDashoffset={dashOffset}
//           strokeLinecap="round"
//         />
//       </svg>
//       <div className="ring-center">
//         <div className="ring-number">{display}</div>
//         <div className="ring-label">{label}</div>
//       </div>
//       {/* Simple number display for mobile */}
//       <div className="timer-simple">
//         <div className="timer-number">{display}</div>
//         <div className="timer-label">{label}</div>
//       </div>
//     </div>
//   )
// }

function Leaderboard() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'othello' | '2048' | 'flappy' | 'carcassonne'>('all')
  const [sortBy, setSortBy] = useState<'reward' | 'joined' | 'stars'>('reward')
  const [currentPage, setCurrentPage] = useState(1)

  const truncateAddress = (address: string) => {
    if (address.length <= 6) return address
    return address.substring(0, 6) + '...'
  }

  const leaderboardData = [
    { rank: 1, player: '0x4f2123456789012345678901234567890123456789', game: '2048', score: '99765', reward: 1000, joined: '2024-01-15', stars: 5, isCurrentUser: false },
    { rank: 2, player: '0xe345678901234567890123456789012345678901', game: 'Othello', score: 'W/L 250/15', reward: 750, joined: '2024-01-20', stars: 4, isCurrentUser: false },
    { rank: 2, player: '0x678901234567890123456789012345678901234567', game: '2048', score: '88762', reward: 750, joined: '2024-01-18', stars: 3, isCurrentUser: false },
    { rank: 3, player: '0x901234567890123456789012345678901234567890', game: 'Othello', score: 'W/L 250/15', reward: 500, joined: '2024-01-22', stars: 5, isCurrentUser: false },
    { rank: 3, player: '0x123456789012345678901234567890123456789012', game: '2048', score: '85352', reward: 50, joined: '2024-01-10', stars: 2, isCurrentUser: false },
    { rank: 10, player: '0x123456789012345678901234567890123456789012', game: '2048', score: '85TS2', reward: 50, joined: '2024-01-25', stars: 1, isCurrentUser: false },
    { rank: 10, player: '0x123456789012345678901234567890123456789012', game: '2048', score: '45762', reward: 50, joined: '2024-01-12', stars: 4, isCurrentUser: true },
  ]

  // Filter and sort the data
  const filteredData = leaderboardData.filter(entry => {
    if (activeFilter === 'all') return true
    return entry.game.toLowerCase() === activeFilter || 
           (activeFilter === 'othello' && entry.game === 'Othello') ||
           (activeFilter === '2048' && entry.game === '2048') ||
           (activeFilter === 'flappy' && entry.game === 'Flappy Bird') ||
           (activeFilter === 'carcassonne' && entry.game === 'Carcassonne')
  })

  const sortedData = [...filteredData].sort((a, b) => {
    switch (sortBy) {
      case 'reward':
        return b.reward - a.reward
      case 'joined':
        return new Date(b.joined).getTime() - new Date(a.joined).getTime()
      case 'stars':
        return b.stars - a.stars
      default:
        return 0
    }
  })

  return (
    <section className="section leaderboard-section">
      <div className="leaderboard-container">
        <div className="leaderboard-main">
          <h2 className="leaderboard-title">GLOBAL LEADERBOARDS</h2>
          <div className="leaderboard-filters">
            <select 
              className="leaderboard-select"
              value={activeFilter}
              onChange={(e) => setActiveFilter(e.target.value as 'all' | 'othello' | '2048' | 'flappy' | 'carcassonne')}
            >
              <option value="2048">2048</option>
              <option value="all">ALL GAMES</option>
              <option value="othello">OTHELLO CHPTO KINGS</option>
              <option value="flappy">FLAPPY BIRD</option>
              <option value="carcassonne">CARCASSONNE</option>
            </select>
            <select 
              className="leaderboard-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'reward' | 'joined' | 'stars')}
            >
              <option value="reward">SORT BY: REWARD</option>
              <option value="joined">SORT BY: JOINED</option>
              <option value="stars">SORT BY: STARS</option>
            </select>
          </div>
          
          <div className="leaderboard-table-wrapper">
            <table className="leaderboard-table">
              <thead>
                <tr>
                  <th className="rank-col">RANK</th>
                  <th className="player-col">ADDRESS</th>
                  <th className="game-col">GAME/SCORE</th>
                  <th className="reward-col">REWARD</th>
                </tr>
              </thead>
              <tbody>
                {sortedData.map((entry, index) => (
                  <tr key={index} className={entry.isCurrentUser ? 'current-user' : ''}>
                    <td className="rank-col">#{entry.rank}</td>
                    <td className="player-col">
                      <div className="player-info">
                        {entry.isCurrentUser ? (
                          <FaUser className="player-icon user-icon" />
                        ) : (
                          <FaShieldAlt className="player-icon shield-icon" />
                        )}
                        <span className="player-name">{truncateAddress(entry.player)}</span>
                      </div>
                    </td>
                    <td className="game-col">
                      <div className="game-score">{entry.game} ({entry.score})</div>
                    </td>
                    <td className="reward-col">{entry.reward} $CHML</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="leaderboard-pagination">
            <button className="pagination-btn" disabled={currentPage === 1}>‹‹ PREV</button>
            <button className={`pagination-page ${currentPage === 1 ? 'active' : ''}`} onClick={() => setCurrentPage(1)}>1</button>
            <button className={`pagination-page ${currentPage === 2 ? 'active' : ''}`} onClick={() => setCurrentPage(2)}>2</button>
            <button className={`pagination-page ${currentPage === 3 ? 'active' : ''}`} onClick={() => setCurrentPage(3)}>3</button>
            <button className="pagination-btn" disabled={currentPage === 3}>NEXT ››</button>
          </div>
        </div>
        {/* <div className="leaderboard-sidebar">
          <h3 className="sidebar-title">YOUR RANKING</h3>
          <div className="sidebar-graphic">
            <div className="chameleon-illustration">🦎</div>
            <div className="holographic-bg"></div>
          </div>
          <div className="sidebar-user-info">
            <FaUser className="sidebar-avatar" />
            <div className="sidebar-user-details">
              <div className="sidebar-username">YouAreHere</div>
              <div className="sidebar-rank">#10</div>
            </div>
          </div>
          <div className="sidebar-total-earned">
            TOTAL EARNED: 12HML
          </div>
          <button className="sidebar-profile-btn">VIEW MY PROFILE</button>
        </div> */}
      </div>
    </section>
  )
}

function LatestBlogPosts({ limit }: { limit?: number }) {
  const allPosts = [
    { title: "How to Earn Crypto Playing Games!", imageSrc: blog1, variant: "light" as const, icon: <FaGamepad />, category: "game" as const, author: "John Doe", postedDate: "Jan 15, 2024", readingTime: "5 min read", dateValue: new Date("2024-01-15") },
    { title: "Now to Earn Alert: Othello Playing Fimes!", imageSrc: blog2, variant: "dark" as const, icon: <FaRegComments />, category: "crypto" as const, author: "Jane Smith", postedDate: "Jan 12, 2024", readingTime: "3 min read", dateValue: new Date("2024-01-12") },
    { title: "Chamelon Coin Utility & Roadmap", imageSrc: blog3, variant: "dark" as const, icon: <FaMusic />, category: "crypto" as const, author: "Mike Johnson", postedDate: "Jan 10, 2024", readingTime: "7 min read", dateValue: new Date("2024-01-10") },
    { title: "Market Trends & Analytics", imageSrc: blog4, variant: "dark" as const, icon: <FaChartLine />, category: "new" as const, author: "Sarah Williams", postedDate: "Jan 8, 2024", readingTime: "4 min read", dateValue: new Date("2024-01-08") },
    { title: "Launch Updates & Roadmap", imageSrc: blog5, variant: "light" as const, icon: <FaRocket />, category: "server" as const, author: "David Brown", postedDate: "Jan 5, 2024", readingTime: "6 min read", dateValue: new Date("2024-01-05") },
    { title: "Achievements & Milestones", imageSrc: blog6, variant: "dark" as const, icon: <FaAward />, category: "game" as const, author: "Emily Davis", postedDate: "Jan 3, 2024", readingTime: "5 min read", dateValue: new Date("2024-01-03") },
  ]
  
  // Sort by date (newest first) and limit
  const posts = limit 
    ? [...allPosts].sort((a, b) => b.dateValue.getTime() - a.dateValue.getTime()).slice(0, limit)
    : allPosts

  return (
    <section className="section">
      <h2 className="section-title">Latest Blog Posts</h2>
      <div className="card-grid">
        {posts.map((post, index) => (
          <BlogCard 
            key={index}
            title={post.title} 
            imageSrc={post.imageSrc} 
            variant={post.variant}
            icon={post.icon}
            category={post.category}
            author={post.author}
            postedDate={post.postedDate}
            readingTime={post.readingTime}
          />
        ))}
      </div>
    </section>
  )
}

type BlogCardProps = { 
  title: string
  imageSrc: string
  variant: 'light' | 'dark'
  icon: React.ReactNode
  category: 'game' | 'crypto' | 'server' | 'new'
  author: string
  postedDate: string
  readingTime: string
}

function BlogCard({ title, imageSrc, variant, icon: _icon, category, author, postedDate, readingTime }: BlogCardProps) {
  const categoryIcons = {
    game: <FaGamepad />,
    crypto: <FaCoins />,
    server: <FaServer />,
    new: <FaStar />
  }

  return (
    <div className={`blog-card blog-card-${variant}`}>
      {/* <div className="blog-icon">{icon}</div> */}
      <div className="blog-content">
        <div className="blog-category-wrapper">
          <span className={`blog-category blog-category-${category}`}>
            {categoryIcons[category]}
            <span className="blog-category-text">{category}</span>
          </span>
        </div>
        <div className="blog-title">{title}</div>
        <div className="blog-image-container">
          <img src={imageSrc} alt={title} className="blog-image" />
        </div>
        <div className="blog-meta">
          <div className="blog-meta-info">
            <span className="blog-author">{author}</span>
            <span className="blog-separator">•</span>
            <span className="blog-date">{postedDate}</span>
            <span className="blog-separator">•</span>
            <span className="blog-reading-time">{readingTime}</span>
          </div>
        </div>
        <div className="blog-read-btn-wrapper">
          <button className="btn btn-primary blog-read-btn">
            <FaBookOpen className="blog-read-icon" />
            Read
          </button>
        </div>
      </div>
      {variant === 'light' && (
        <>
          <div className="blog-coins">🪙🪙🪙</div>
          <div className="blog-sprite">👾</div>
        </>
      )}
      {variant === 'dark' && (
        <div className="blog-patterns">
          <span className="star">✦</span>
          <span className="star">✦</span>
          <span className="star">✦</span>
        </div>
      )}
    </div>
  )
}

function Footer() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle subscription logic here
    console.log('Subscribing:', email)
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
        {/* <div className="footer-products">
          <div className="footer-heading">PRODUCTS</div>
          <div className="footer-product-list">
            <a className="footer-product-link">Quark Multiplayer</a>
            <a className="footer-product-link">Spinor</a>
          </div>
        </div> */}
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
            By subscribing, you agree to our <a href="#" className="footer-privacy-link">Privacy Policy</a> and consent to updates.
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <div className="footer-copyright">© 2025 EvoFuse. All rights reserved.</div>
          <div className="footer-legal-links">
            <a href="#" className="footer-legal-link">Terms & Conditions</a>
            <a href="#" className="footer-legal-link">Privacy Policy</a>
            <a href="#" className="footer-legal-link">Cookies Policy</a>
            <a href="#" className="footer-legal-link">Modern Slavery Act</a>
            <a href="#" className="footer-legal-link">Anti-Bribery</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default App
