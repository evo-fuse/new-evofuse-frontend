import { useEffect, useLayoutEffect, useState } from 'react'
import Leaderboard from '../components/Leaderboard'
import { useLoading } from '../contexts/LoadingContext'
import LeaderboardSkeleton from '../components/LeaderboardSkeleton'

function LeaderboardPage() {
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
    return <LeaderboardSkeleton />
  }

  return (
    <Leaderboard />
  )
}

export default LeaderboardPage


