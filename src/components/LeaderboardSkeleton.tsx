function LeaderboardSkeleton() {
  return (
    <section className="section leaderboard-section">
      <div className="leaderboard-container">
        <div className="leaderboard-main">
          <div className="skeleton skeleton-title" style={{ width: '300px', height: '32px', marginBottom: '20px' }}></div>
          <div className="leaderboard-filters" style={{ marginBottom: '24px' }}>
            <div className="skeleton" style={{ width: '250px', height: '40px', marginRight: '12px' }}></div>
            <div className="skeleton" style={{ width: '250px', height: '40px' }}></div>
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
                {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                  <tr key={i}>
                    <td className="rank-col">
                      <div className="skeleton" style={{ width: '40px', height: '20px', margin: '0 auto' }}></div>
                    </td>
                    <td className="player-col">
                      <div className="skeleton" style={{ width: '120px', height: '20px' }}></div>
                    </td>
                    <td className="game-col">
                      <div className="skeleton" style={{ width: '150px', height: '20px' }}></div>
                    </td>
                    <td className="reward-col">
                      <div className="skeleton" style={{ width: '80px', height: '20px' }}></div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="leaderboard-pagination" style={{ marginTop: '24px' }}>
            <div className="skeleton" style={{ width: '80px', height: '40px', marginRight: '8px' }}></div>
            <div className="skeleton" style={{ width: '40px', height: '40px', marginRight: '8px' }}></div>
            <div className="skeleton" style={{ width: '40px', height: '40px', marginRight: '8px' }}></div>
            <div className="skeleton" style={{ width: '40px', height: '40px', marginRight: '8px' }}></div>
            <div className="skeleton" style={{ width: '80px', height: '40px' }}></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LeaderboardSkeleton

