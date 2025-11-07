import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

function MainLayout() {
  return (
    <div className="page">
      <Header />
      <div style={{ marginTop: '80px', paddingBottom: '40px' }}>
        <div className="content-shell">
          <main className="container">
            <Outlet />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout


