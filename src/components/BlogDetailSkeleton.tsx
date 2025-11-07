function BlogDetailSkeleton() {
  return (
    <div className="blog-detail-page">
      <div className="container">
        <article className="blog-detail">
          <header className="blog-detail-header">
            <div className="skeleton skeleton-title"></div>
            <div className="skeleton skeleton-meta"></div>
          </header>
          <div className="blog-detail-hero">
            <div className="skeleton skeleton-image"></div>
          </div>
          <div className="blog-detail-content">
            <div className="skeleton skeleton-text" style={{ width: '100%', height: '20px', marginBottom: '12px' }}></div>
            <div className="skeleton skeleton-text" style={{ width: '100%', height: '20px', marginBottom: '12px' }}></div>
            <div className="skeleton skeleton-text" style={{ width: '90%', height: '20px', marginBottom: '24px' }}></div>
            <div className="skeleton skeleton-heading" style={{ width: '60%', height: '24px', marginBottom: '16px' }}></div>
            <div className="skeleton skeleton-text" style={{ width: '100%', height: '20px', marginBottom: '12px' }}></div>
            <div className="skeleton skeleton-text" style={{ width: '95%', height: '20px', marginBottom: '12px' }}></div>
            <div className="skeleton skeleton-text" style={{ width: '85%', height: '20px', marginBottom: '24px' }}></div>
            <div className="skeleton skeleton-heading" style={{ width: '50%', height: '24px', marginBottom: '16px' }}></div>
            <div className="skeleton skeleton-text" style={{ width: '100%', height: '20px', marginBottom: '12px' }}></div>
            <div className="skeleton skeleton-text" style={{ width: '90%', height: '20px', marginBottom: '12px' }}></div>
          </div>
          <footer className="blog-detail-footer">
            <div className="skeleton skeleton-button"></div>
          </footer>
        </article>
      </div>
    </div>
  )
}

export default BlogDetailSkeleton

