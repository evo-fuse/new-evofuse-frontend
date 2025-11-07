import { useMemo, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getPostBySlug } from '../data/blog'
import { useLoading } from '../contexts/LoadingContext'
import BlogDetailSkeleton from '../components/BlogDetailSkeleton'

function BlogDetailPage() {
  const { slug } = useParams()
  const post = useMemo(() => (slug ? getPostBySlug(slug) : undefined), [slug])
  const { loading, setLoading } = useLoading()

  useEffect(() => {
    setLoading(true)
    const t = setTimeout(() => setLoading(false), 1000)
    return () => {
      clearTimeout(t)
      setLoading(false)
    }
  }, [slug, setLoading])

  if (!post) {
    return (
      <div className="blog-detail-page">
        <div className="container">
          <section className="section">
            <h2 className="section-title">Post not found</h2>
            <p>We couldn't find the blog you're looking for.</p>
            <Link to="/blog" className="btn btn-primary" style={{ marginTop: 12 }}>Back to Blog</Link>
          </section>
        </div>
      </div>
    )
  }

  if (loading) {
    return <BlogDetailSkeleton />
  }

  return (
    <div className="blog-detail-page">
      <div className="container">
        <article className="blog-detail page-fade-in">
          <header className="blog-detail-header">
            <h1 className="blog-detail-title">{post.title}</h1>
            <div className="blog-detail-separator"></div>
            <div className="blog-detail-meta">
              <span>{post.author}</span>
              <span>•</span>
              <span>{post.postedDate}</span>
              <span>•</span>
              <span>{post.readingTime}</span>
            </div>
          </header>
          <div className="blog-detail-hero">
            <img src={post.imageSrc} alt={post.title} />
          </div>
          <div className="blog-detail-content">
            {post.content.map((block, i) => (
              <div key={i} className="blog-detail-block">
                {block.heading && <h2>{block.heading}</h2>}
                {block.paragraph && <p>{block.paragraph}</p>}
              </div>
            ))}
          </div>
          <footer className="blog-detail-footer">
            <Link to="/blog" className="btn btn-outline">Back to Blog</Link>
          </footer>
        </article>
      </div>
    </div>
  )
}

export default BlogDetailPage



