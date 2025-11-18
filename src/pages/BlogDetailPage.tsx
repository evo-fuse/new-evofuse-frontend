import { useMemo, useEffect, useRef, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getPostBySlug } from '../data/blog'
import { useLoading } from '../contexts/LoadingContext'
import BlogDetailSkeleton from '../components/BlogDetailSkeleton'

function BlogDetailPage() {
  const { slug } = useParams()
  const post = useMemo(() => (slug ? getPostBySlug(slug) : undefined), [slug])
  const { loading, setLoading } = useLoading()
  const roadmapRefs = useRef<(HTMLDivElement | null)[]>([])
  const [visibleRoadmaps, setVisibleRoadmaps] = useState<Set<number>>(new Set())

  // Check if a heading is a roadmap heading (starts with Q and contains a year)
  const isRoadmapHeading = (heading: string | undefined): boolean => {
    if (!heading) return false
    return /^Q[1-4]\s+\d{4}/.test(heading.trim())
  }

  // Intersection Observer for roadmap animations
  useEffect(() => {
    if (loading || !post) return

    const observers: IntersectionObserver[] = []

    roadmapRefs.current.forEach((ref, index) => {
      if (!ref) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleRoadmaps((prev) => new Set(prev).add(index))
              observer.unobserve(entry.target)
            }
          })
        },
        {
          threshold: 0.2,
          rootMargin: '0px 0px -50px 0px'
        }
      )

      observer.observe(ref)
      observers.push(observer)
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [loading, post])

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
            {post.content.map((block, i) => {
              const isRoadmapHeadingBlock = isRoadmapHeading(block.heading)
              // Check if previous block was a roadmap heading (to include the paragraph)
              const prevBlock = i > 0 ? post.content[i - 1] : null
              const isRoadmapParagraph = !block.heading && block.paragraph && prevBlock && isRoadmapHeading(prevBlock.heading)
              const isRoadmap = isRoadmapHeadingBlock || isRoadmapParagraph
              
              // Calculate roadmap index
              let roadmapIndex = -1
              if (isRoadmapHeadingBlock) {
                roadmapIndex = post.content.slice(0, i).filter((b) => isRoadmapHeading(b.heading)).length
              } else if (isRoadmapParagraph && prevBlock) {
                // Use the same index as the previous roadmap heading
                roadmapIndex = post.content.slice(0, i - 1).filter((b) => isRoadmapHeading(b.heading)).length
              }
              
              const isVisible = roadmapIndex >= 0 && visibleRoadmaps.has(roadmapIndex)

              return (
                <div
                  key={i}
                  ref={(el) => {
                    if (isRoadmapHeadingBlock && roadmapIndex >= 0) {
                      roadmapRefs.current[roadmapIndex] = el
                    }
                  }}
                  className={`blog-detail-block ${isRoadmap ? 'roadmap-section' : ''} ${isVisible ? 'roadmap-visible' : ''}`}
                >
                  {block.heading && (
                    <h2 className={isRoadmap ? 'roadmap-heading' : ''}>{block.heading}</h2>
                  )}
                  {block.paragraph && (
                    <p className={isRoadmap ? 'roadmap-paragraph' : ''}>{block.paragraph}</p>
                  )}
                {block.list && (
                  block.list.type === 'ordered' ? (
                    <ol>
                      {block.list.items.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ol>
                  ) : (
                    <ul>
                      {block.list.items.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  )
                )}
                {block.table && (
                  <table>
                    <thead>
                      <tr>
                        {block.table.headers.map((header, idx) => (
                          <th key={idx}>{header}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {block.table.rows.map((row, rowIdx) => (
                        <tr key={rowIdx}>
                          {row.map((cell, cellIdx) => (
                            <td key={cellIdx}>{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
                {block.image && (
                  <img
                    src={block.image.src}
                    alt={block.image.alt || post.title}
                    className={block.image.className}
                  />
                )}
                </div>
              )
            })}
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



