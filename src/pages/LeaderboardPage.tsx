import { useEffect } from 'react'
import Leaderboard from '../components/Leaderboard'
import { useLoading } from '../contexts/LoadingContext'
import LeaderboardSkeleton from '../components/LeaderboardSkeleton'

function LeaderboardPage() {
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
    return <LeaderboardSkeleton />
  }

  return (
    <Leaderboard />
  )
}

export default LeaderboardPage


