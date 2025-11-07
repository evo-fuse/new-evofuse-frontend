function GameDetailSkeleton() {
  return (
    <div className="game-detail-page">
      <div className="game-detail-container">
        <div className="game-detail-layout">
          <div className="game-detail-intro">
            <div className="skeleton" style={{ width: '70%', height: '36px', borderRadius: '8px', marginBottom: '16px' }}></div>
            <div className="skeleton" style={{ width: '100%', height: '20px', borderRadius: '4px', marginBottom: '8px' }}></div>
            <div className="skeleton" style={{ width: '90%', height: '20px', borderRadius: '4px', marginBottom: '24px' }}></div>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="skeleton" style={{ width: '100%', height: '20px', borderRadius: '4px', marginBottom: '12px' }}></div>
            ))}
            <div className="skeleton" style={{ width: '100%', height: '48px', borderRadius: '10px', marginTop: '32px' }}></div>
          </div>
          <div className="game-detail-interface">
            <div className="skeleton" style={{ width: '100%', height: '60px', borderRadius: '8px', marginBottom: '24px' }}></div>
            <div className="skeleton" style={{ width: '100%', height: '400px', borderRadius: '12px', marginBottom: '24px' }}></div>
            <div className="skeleton" style={{ width: '40%', height: '24px', borderRadius: '4px', marginBottom: '16px' }}></div>
            {[1, 2, 3].map((i) => (
              <div key={i} className="skeleton" style={{ width: '100%', height: '60px', borderRadius: '12px', marginBottom: '12px' }}></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameDetailSkeleton

