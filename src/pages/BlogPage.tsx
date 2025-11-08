import { useEffect, useLayoutEffect, useState } from 'react'
import LatestBlogPosts from '../components/LatestBlogPosts'
import { useLoading } from '../contexts/LoadingContext'
import BlogPageSkeleton from '../components/BlogPageSkeleton'

function BlogPage() {
  const { setLoading } = useLoading()
  const [isLoading, setIsLoading] = useState(true)

  // Use useLayoutEffect to set loading state synchronously before paint
  useLayoutEffect(() => {
    setIsLoading(true)
    setLoading(true)
  }, [setLoading])

  useEffect(() => {
    const t = setTimeout(() => {
      setIsLoading(false)
      setLoading(false)
    }, 1000)
    
    return () => {
      clearTimeout(t)
      setIsLoading(false)
      setLoading(false)
    }
  }, [setLoading])

  if (isLoading) {
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


