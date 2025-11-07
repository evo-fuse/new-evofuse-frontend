import { useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaBookOpen } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { blogPosts } from '../data/blog'

function BlogCard({ slug, title, imageSrc, variant, category, author, postedDate, readingTime }: { 
  slug: string
  title: string
  imageSrc: string
  variant: 'light' | 'dark'
  category: 'game' | 'crypto' | 'server' | 'new'
  author: string
  postedDate: string
  readingTime: string
}) {
  return (
    <div className={`blog-card blog-card-${variant}`}>
      <div className={`blog-category-banner blog-category-${category}`}>
        <span className="blog-category-text">{category}</span>
      </div>
      <div className="blog-content">
        <div className="blog-image-container">
          <img src={imageSrc} alt={title} className="blog-image" />
          <div className="blog-image-overlay"></div>
          <div className="blog-title">{title}</div>
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
          <Link to={`/blog/${slug}`} className="btn btn-primary blog-read-btn">
            <FaBookOpen className="blog-read-icon" />
            Read
          </Link>
        </div>
      </div>
      {/* {variant === 'light' && (
        <>
          <div className="blog-coins">🪙🪙🪙</div>
          <div className="blog-sprite">👾</div>
        </>
      )} */}
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

function LatestBlogPosts({ limit }: { limit?: number }) {
  const allPosts = blogPosts

  const itemsPerPage = 6
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'game' | 'crypto' | 'server' | 'new'>('all')

  const sortedPosts = [...allPosts].sort((a, b) => b.dateValue.getTime() - a.dateValue.getTime())
  
  // Filter posts by category
  const filteredPosts = selectedCategory === 'all' 
    ? sortedPosts 
    : sortedPosts.filter(post => post.category === selectedCategory)

  if (limit) {
    const posts = filteredPosts.slice(0, limit)
    return (
      <section className="section">
        <h2 className="section-title">Top Voices</h2>
        <div className="card-grid">
          {posts.map((post, index) => (
            <BlogCard 
              key={index}
              slug={post.slug}
              title={post.title} 
              imageSrc={post.imageSrc} 
              variant={post.variant}
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

  const totalPages = Math.ceil(filteredPosts.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const posts = filteredPosts.slice(startIndex, endIndex)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleCategoryChange = (category: 'all' | 'game' | 'crypto' | 'server' | 'new') => {
    setSelectedCategory(category)
    setCurrentPage(1)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section className="section">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '16px' }}>
        <h2 className="section-title" style={{ margin: 0 }}>Top Voices</h2>
        <select
          className="leaderboard-select"
          value={selectedCategory}
          onChange={(e) => handleCategoryChange(e.target.value as 'all' | 'game' | 'crypto' | 'server' | 'new')}
          style={{ minWidth: '200px' }}
        >
          <option value="all">ALL CATEGORIES</option>
          <option value="game">GAME</option>
          <option value="crypto">CRYPTO</option>
          <option value="server">SERVER</option>
          <option value="new">NEW</option>
        </select>
      </div>
      <div className="card-grid">
        {posts.map((post, index) => (
          <BlogCard 
            key={index}
            slug={post.slug}
            title={post.title} 
            imageSrc={post.imageSrc} 
            variant={post.variant}
            category={post.category}
            author={post.author}
            postedDate={post.postedDate}
            readingTime={post.readingTime}
          />
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

export default LatestBlogPosts


