import { useEffect } from 'react'
import { useLoading } from '../contexts/LoadingContext'
import AboutUsSkeleton from '../components/AboutUsSkeleton'
import { FaLinkedin, FaFacebook } from 'react-icons/fa'
import { FaDiscord } from 'react-icons/fa6'
import chikoAvatar from '../assets/teams/chiko.png'

function AboutUsPage() {
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
    return <AboutUsSkeleton />
  }

  return (
    <div className="about-page">
      <div className="container">
        <section className="section page-fade-in">
          <div className="about-content">
            {/* Team Section */}
            <div className="about-team-section">
              <h2 className="about-section-title">Our Team</h2>
              <div className="about-team-description">
                <p className="about-team-description-text">
                  EvoFuse is a wild fusion of classic games, blockchain rewards, and pure chaotic fun—where every swipe, merge, or bingo spin could earn you real DWAT tokens. It's like your favorite childhood games grew up, got on-chain, and started paying rent. Whether you're fusing history tiles or betting on SportBingo, EvoFuse turns casual gaming into a crypto-powered thrill ride.
                </p>
              </div>
              <div className="about-team-separator"></div>
              <div className="about-team-grid">
                <div className="about-team-member">
                  <div className="about-team-avatar">
                    <img src={chikoAvatar} alt="Chiko" />
                  </div>
                  <h3 className="about-team-name">Chiko</h3>
                  <div className="about-team-social">
                    <a href="#" className="about-team-social-link" aria-label="LinkedIn">
                      <FaLinkedin />
                    </a>
                    <a href="#" className="about-team-social-link" aria-label="Discord">
                      <FaDiscord />
                    </a>
                    <a href="#" className="about-team-social-link" aria-label="Facebook">
                      <FaFacebook />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default AboutUsPage

