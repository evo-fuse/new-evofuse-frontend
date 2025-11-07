import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import { LoadingProvider, useLoading } from './contexts/LoadingContext'
import MainLayout from './layout/MainLayout'
import HomePage from './pages/HomePage'
import GamesPage from './pages/GamesPage'
import BlogPage from './pages/BlogPage'
import LeaderboardPage from './pages/LeaderboardPage'
import TermsPage from './pages/TermsPage'
import ContactUsPage from './pages/ContactUsPage'
import BlogDetailPage from './pages/BlogDetailPage'
import AboutUsPage from './pages/AboutUsPage'
import PageLoader from './components/PageLoader'
import PreSaleBanner from './components/PreSaleBanner'

function AppContent() {
  const { loading } = useLoading()
  const location = useLocation()
  
  // Routes that should only show skeleton, not the circle ring loader
  const skeletonOnlyRoutes = ['/games', '/blog', '/leaderboard', '/terms', '/about']
  const isSkeletonOnlyRoute = skeletonOnlyRoutes.some(route => 
    location.pathname === route || location.pathname.startsWith('/blog/')
  )

  return (
    <>
      {loading && !isSkeletonOnlyRoute && <PageLoader />}
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogDetailPage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
        </Route>
      </Routes>
      <PreSaleBanner />
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
