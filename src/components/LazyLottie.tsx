import { useState, useEffect, lazy, Suspense } from 'react'

// Lazy load Lottie to reduce initial bundle size
const Lottie = lazy(() => import('lottie-react'))

interface LazyLottieProps {
  animationUrl: string
  className?: string
  loop?: boolean
}

function LazyLottie({ animationUrl, className, loop = true }: LazyLottieProps) {
  const [animationData, setAnimationData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Fetch the animation JSON at runtime instead of bundling it
    fetch(animationUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to load animation: ${response.statusText}`)
        }
        return response.json()
      })
      .then((data) => {
        setAnimationData(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error('Error loading Lottie animation:', err)
        setError(err.message)
        setLoading(false)
      })
  }, [animationUrl])

  if (loading) {
    return <div className={className} style={{ width: '100%', height: '200px' }} />
  }

  if (error || !animationData) {
    return <div className={className} style={{ width: '100%', height: '200px' }} />
  }

  return (
    <Suspense fallback={<div className={className} style={{ width: '100%', height: '200px' }} />}>
      <Lottie animationData={animationData} className={className} loop={loop} />
    </Suspense>
  )
}

export default LazyLottie

