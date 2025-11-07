import './App.css'
import { Routes, Route } from 'react-router-dom'
import { LoadingProvider, useLoading } from './contexts/LoadingContext'
import MainLayout from './layout/MainLayout'
import HomePage from './pages/HomePage'
import GamesPage from './pages/GamesPage'
import BlogPage from './pages/BlogPage'
import LeaderboardPage from './pages/LeaderboardPage'
import TermsPage from './pages/TermsPage'
import ContactUsPage from './pages/ContactUsPage'
import BlogDetailPage from './pages/BlogDetailPage'
import PageLoader from './components/PageLoader'

function AppContent() {
  const { loading } = useLoading()

  return (
    <>
      {loading && <PageLoader />}
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogDetailPage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
        </Route>
      </Routes>
    </>
  )
}

function App() {
  return (
    <LoadingProvider>
      <AppContent />
    </LoadingProvider>
  )
}

export default App
