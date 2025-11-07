import './App.css'
import { Routes, Route } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import HomePage from './pages/HomePage'
import GamesPage from './pages/GamesPage'
import BlogPage from './pages/BlogPage'
import LeaderboardPage from './pages/LeaderboardPage'

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/games" element={<GamesPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
      </Route>
    </Routes>
  )
}
export default App
