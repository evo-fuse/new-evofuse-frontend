import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import { LoadingProvider, useLoading } from './contexts/LoadingContext'
import { ComingSoonModalProvider } from './contexts/ComingSoonModalContext'
import MainLayout from './layout/MainLayout'
import HomePage from './pages/HomePage'
import GamesPage from './pages/GamesPage'
import BlogPage from './pages/BlogPage'
import LeaderboardPage from './pages/LeaderboardPage'
import TermsPage from './pages/TermsPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import ContactUsPage from './pages/ContactUsPage'
import BlogDetailPage from './pages/BlogDetailPage'
import AboutUsPage from './pages/AboutUsPage'
import GameDetailPage from './pages/GameDetailPage'
import PageLoader from './components/PageLoader'
import PreSaleBanner from './components/PreSaleBanner'
import ComingSoonModal from './components/ComingSoonModal'

function AppContent() {
  const { loading } = useLoading()
  const location = useLocation()
  
  // Routes that should only show skeleton, not the circle ring loader
  const skeletonOnlyRoutes = ['/games', '/blog', '/leaderboard', '/terms', '/privacy', '/about', '/contact']
  const isSkeletonOnlyRoute = skeletonOnlyRoutes.some(route => 
    location.pathname === route || location.pathname.startsWith('/blog/') || location.pathname.startsWith('/game/')
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
          <Route path="/game/:slug" element={<GameDetailPage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
        </Route>
      </Routes>
      <PreSaleBanner />
      <ComingSoonModal />
    </>
  )
}

function App() {
  return (
    <LoadingProvider>
      <ComingSoonModalProvider>
        <AppContent />
      </ComingSoonModalProvider>
    </LoadingProvider>
  )
}

export default App
