import { useEffect } from 'react'
import FeaturedGames from '../components/FeaturedGames'
import { useLoading } from '../contexts/LoadingContext'
import GamesPageSkeleton from '../components/GamesPageSkeleton'

function GamesPage() {
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


