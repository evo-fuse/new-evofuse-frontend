function BlogPageSkeleton() {
  return (
    <div className="blog-page">
      <div className="container">
        <section className="section">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '16px' }}>
            <div className="skeleton skeleton-title" style={{ width: '200px', height: '28px' }}></div>
            <div className="skeleton" style={{ width: '200px', height: '40px', borderRadius: '0' }}></div>
          </div>
          <div className="card-grid">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className={`blog-card blog-card-${i % 2 === 0 ? 'light' : 'dark'}`}>
                <div className="skeleton skeleton-category-banner"></div>
                <div className="blog-content">
                  <div className="blog-image-container">
                    <div className="skeleton skeleton-image" style={{ width: '100%', height: '100%', borderRadius: '12px' }}></div>
                    <div className="blog-image-overlay"></div>
                    <div className="skeleton skeleton-blog-title" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%', height: '20px', zIndex: 2 }}></div>
                  </div>
                  <div className="blog-meta">
                    <div className="skeleton skeleton-meta" style={{ width: '70%', height: '14px' }}></div>
                  </div>
                  <div className="blog-read-btn-wrapper">
                    <div className="skeleton skeleton-button" style={{ width: '100px', height: '36px', margin: '0 auto' }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default BlogPageSkeleton

