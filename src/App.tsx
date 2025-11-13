import './App.css'
import { lazy, Suspense } from 'react'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { LoadingProvider, useLoading } from './contexts/LoadingContext'
import { ComingSoonModalProvider } from './contexts/ComingSoonModalContext'
import { ApplyingModalProvider } from './contexts/ApplyingModalContext'
import MainLayout from './layout/MainLayout'
import PageLoader from './components/PageLoader'
import PreSaleBanner from './components/PreSaleBanner'
import ComingSoonModal from './components/ComingSoonModal'
import ApplyingModal from './components/ApplyingModal'

// Lazy load page components
const HomePage = lazy(() => import('./pages/HomePage'))
const GamesPage = lazy(() => import('./pages/GamesPage'))
const BlogPage = lazy(() => import('./pages/BlogPage'))
// const LeaderboardPage = lazy(() => import('./pages/LeaderboardPage'))
const TermsPage = lazy(() => import('./pages/TermsPage'))
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'))
const ContactUsPage = lazy(() => import('./pages/ContactUsPage'))
const BlogDetailPage = lazy(() => import('./pages/BlogDetailPage'))
const AboutUsPage = lazy(() => import('./pages/AboutUsPage'))
const GameDetailPage = lazy(() => import('./pages/GameDetailPage'))

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
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/2048" element={<Navigate to="/game/2048" />} />
            <Route path="/games" element={<GamesPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogDetailPage />} />
            <Route path="/game/:slug" element={<GameDetailPage />} />
            {/* <Route path="/leaderboard" element={<LeaderboardPage />} /> */}
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
          </Route>
        </Routes>
      </Suspense>
      <PreSaleBanner />
      <ComingSoonModal />
      <ApplyingModal />
    </>
  )
}

function App() {
  return (
    <LoadingProvider>
      <ComingSoonModalProvider>
        <ApplyingModalProvider>
          <AppContent />
        </ApplyingModalProvider>
      </ComingSoonModalProvider>
    </LoadingProvider>
  )
}

export default App
