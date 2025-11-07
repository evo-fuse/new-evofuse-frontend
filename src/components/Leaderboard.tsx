import { useState } from 'react'
import { FaShieldAlt, FaUser } from 'react-icons/fa'

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
    { rank: 3, player: '0x567890123456789012345678901234567890123456', game: '2048', score: '85352', reward: 50, joined: '2024-01-10', stars: 2, isCurrentUser: false },
    { rank: 10, player: '0x789012345678901234567890123456789012345678', game: '2048', score: '85TS2', reward: 50, joined: '2024-01-25', stars: 1, isCurrentUser: false },
    { rank: 10, player: '0x901234567890123456789012345678901234567890', game: '2048', score: '45762', reward: 50, joined: '2024-01-12', stars: 4, isCurrentUser: true },
    { rank: 11, player: '0x101234567890123456789012345678901234567890', game: '2048', score: '45762', reward: 50, joined: '2024-01-12', stars: 4, isCurrentUser: false },
    { rank: 12, player: '0x111234567890123456789012345678901234567890', game: '2048', score: '45762', reward: 50, joined: '2024-01-12', stars: 4, isCurrentUser: false },
    { rank: 13, player: '0x121234567890123456789012345678901234567890', game: '2048', score: '45762', reward: 50, joined: '2024-01-12', stars: 4, isCurrentUser: false },
    { rank: 14, player: '0x131234567890123456789012345678901234567890', game: '2048', score: '45762', reward: 50, joined: '2024-01-12', stars: 4, isCurrentUser: false },
    { rank: 15, player: '0x141234567890123456789012345678901234567890', game: '2048', score: '45762', reward: 50, joined: '2024-01-12', stars: 4, isCurrentUser: false },
    { rank: 16, player: '0x151234567890123456789012345678901234567890', game: '2048', score: '45762', reward: 50, joined: '2024-01-12', stars: 4, isCurrentUser: false },
    { rank: 17, player: '0x161234567890123456789012345678901234567890', game: '2048', score: '45762', reward: 50, joined: '2024-01-12', stars: 4, isCurrentUser: false },
    { rank: 18, player: '0x171234567890123456789012345678901234567890', game: '2048', score: '45762', reward: 50, joined: '2024-01-12', stars: 4, isCurrentUser: false },
    { rank: 19, player: '0x181234567890123456789012345678901234567890', game: '2048', score: '45762', reward: 50, joined: '2024-01-12', stars: 4, isCurrentUser: false },
    { rank: 20, player: '0x191234567890123456789012345678901234567890', game: '2048', score: '45762', reward: 50, joined: '2024-01-12', stars: 4, isCurrentUser: false },
    { rank: 21, player: '0x201234567890123456789012345678901234567890', game: '2048', score: '45762', reward: 50, joined: '2024-01-12', stars: 4, isCurrentUser: false },
    { rank: 22, player: '0x211234567890123456789012345678901234567890', game: '2048', score: '45762', reward: 50, joined: '2024-01-12', stars: 4, isCurrentUser: false },
    { rank: 23, player: '0x221234567890123456789012345678901234567890', game: '2048', score: '45762', reward: 50, joined: '2024-01-12', stars: 4, isCurrentUser: false },
    { rank: 24, player: '0x231234567890123456789012345678901234567890', game: '2048', score: '45762', reward: 50, joined: '2024-01-12', stars: 4, isCurrentUser: false },
    { rank: 25, player: '0x241234567890123456789012345678901234567890', game: '2048', score: '45762', reward: 50, joined: '2024-01-12', stars: 4, isCurrentUser: false },
    { rank: 26, player: '0x251234567890123456789012345678901234567890', game: '2048', score: '45762', reward: 50, joined: '2024-01-12', stars: 4, isCurrentUser: false },
    { rank: 27, player: '0x261234567890123456789012345678901234567890', game: '2048', score: '45762', reward: 50, joined: '2024-01-12', stars: 4, isCurrentUser: false },
  ]

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
            <div className="leaderboard-sort-wrapper">
              <span className="leaderboard-sort-label">Sort by:</span>
              <select 
                className="leaderboard-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'reward' | 'joined' | 'stars')}
              >
                <option value="reward">REWARD</option>
                <option value="joined">JOINED</option>
                <option value="stars">STARS</option>
              </select>
            </div>
          </div>
          <div className="leaderboard-table-wrapper">
            <table className="leaderboard-table">
              <thead>
                <tr>
                  <th className="rank-col">RANK</th>
                  <th className="player-col">ADDRESS</th>
                  <th className="game-col">GAME/SCORE</th>
                  <th className="reward-col">REWARD</th>
                  <th className="joined-col">JOINED DATE</th>
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
                    <td className="joined-col">{entry.joined}</td>
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
      </div>
    </section>
  )
}

export default Leaderboard


