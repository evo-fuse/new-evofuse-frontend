function GamesPageSkeleton() {
  return (
    <div className="games-page">
      <div className="container">
        <section className="section">
          <div className="skeleton skeleton-title" style={{ width: '200px', height: '28px', marginBottom: '20px' }}></div>
          <div className="card-grid">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="game-item">
                <div className="game-banner">
                  <div className="skeleton skeleton-image" style={{ width: '100%', height: '195px', borderRadius: '14px' }}></div>
                </div>
                <div className="game-banner-info">
                  <div className="skeleton skeleton-title" style={{ width: '60%', height: '24px', marginBottom: '8px' }}></div>
                  <div className="skeleton" style={{ width: '100%', height: '1px', marginBottom: '8px' }}></div>
                  <div className="skeleton skeleton-text" style={{ width: '100%', height: '16px', marginBottom: '4px' }}></div>
                  <div className="skeleton skeleton-text" style={{ width: '90%', height: '16px', marginBottom: '4px' }}></div>
                  <div className="skeleton skeleton-text" style={{ width: '85%', height: '16px' }}></div>
                </div>
                <div className="game-banner-cta">
                  <div className="skeleton skeleton-button" style={{ width: '100px', height: '36px', margin: '0 auto' }}></div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.1)', margin: '40px 0' }}></div>
        
        <section className="section">
          <div className="skeleton skeleton-title" style={{ width: '200px', height: '28px', marginBottom: '20px' }}></div>
          <div className="card-grid">
            {[1, 2].map((i) => (
              <div key={i} className="game-item">
                <div className="game-banner">
                  <div className="skeleton skeleton-image" style={{ width: '100%', height: '195px', borderRadius: '14px' }}></div>
                </div>
                <div className="game-banner-info">
                  <div className="skeleton skeleton-title" style={{ width: '60%', height: '24px', marginBottom: '8px' }}></div>
                  <div className="skeleton" style={{ width: '100%', height: '1px', marginBottom: '8px' }}></div>
                  <div className="skeleton skeleton-text" style={{ width: '100%', height: '16px', marginBottom: '4px' }}></div>
                  <div className="skeleton skeleton-text" style={{ width: '90%', height: '16px', marginBottom: '4px' }}></div>
                  <div className="skeleton skeleton-text" style={{ width: '85%', height: '16px' }}></div>
                </div>
                <div className="game-banner-cta">
                  <div className="skeleton skeleton-button" style={{ width: '100px', height: '36px', margin: '0 auto' }}></div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default GamesPageSkeleton

