import { useEffect, useLayoutEffect, useState } from 'react'
import FeaturedGames from '../components/FeaturedGames'
import { useLoading } from '../contexts/LoadingContext'
import GamesPageSkeleton from '../components/GamesPageSkeleton'

function GamesPage() {
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
    return <GamesPageSkeleton />
  }

  return (
    <div className="games-page">
      <div className="container">
        <FeaturedGames />
      </div>
    </div>
  )
}

export default GamesPage


