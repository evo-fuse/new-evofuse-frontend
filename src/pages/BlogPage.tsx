import { useEffect } from 'react'
import LatestBlogPosts from '../components/LatestBlogPosts'
import { useLoading } from '../contexts/LoadingContext'
import BlogPageSkeleton from '../components/BlogPageSkeleton'

function BlogPage() {
  const { loading, setLoading } = useLoading()

  useEffect(() => {
    setLoading(true)
    const t = setTimeout(() => setLoading(false), 1000)
    return () => {
      clearTimeout(t)
      setLoading(false)
    }
  }, [setLoading])

  if (loading) {
    return <BlogPageSkeleton />
  }

  return (
    <div className="blog-page">
      <div className="container">
        <LatestBlogPosts />
      </div>
    </div>
  )
}

export default BlogPage


