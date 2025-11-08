import { useEffect } from 'react'
import { useLoading } from '../contexts/LoadingContext'
import AboutUsSkeleton from '../components/AboutUsSkeleton'
import { FaLinkedin, FaFacebook, FaCode, FaPalette, FaMapMarkerAlt, FaUser } from 'react-icons/fa'
import { FaDiscord } from 'react-icons/fa6'
import johnAvatar from '../assets/teams/John Guerrero.png'
import felixAvatar from '../assets/teams/Felix Hansen.png'
import leonAvatar from '../assets/teams/Leon Weber.png'

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
              <h2 className="about-section-title">Evo Fuse</h2>
              <div className="about-team-description">
                <p className="about-team-description-text">
                  EvoFuse is a wild fusion of classic games, blockchain rewards, and pure chaotic fun—where every swipe, merge, or bingo spin could earn you real DWAT tokens. It's like your favorite childhood games grew up, got on-chain, and started paying rent. Whether you're fusing history tiles or betting on SportBingo, EvoFuse turns casual gaming into a crypto-powered thrill ride.
                </p>
              </div>
              <div className="about-team-separator"></div>
              <div className="about-team-grid">
                <div className="about-team-member">
                  <div className="about-team-avatar">
                    <img src={johnAvatar} alt="John Guerrero" />
                  </div>
                  <h3 className="about-team-name">John Guerrero</h3>
                  <p className="about-team-role">Co-Founder</p>
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
                <div className="about-team-member">
                  <div className="about-team-avatar">
                    <img src={felixAvatar} alt="Felix Hansen" />
                  </div>
                  <h3 className="about-team-name">Felix Hansen</h3>
                  <p className="about-team-role">CEO</p>
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
                <div className="about-team-member">
                  <div className="about-team-avatar">
                    <img src={leonAvatar} alt="Leon Weber" />
                  </div>
                  <h3 className="about-team-name">Leon Weber</h3>
                  <p className="about-team-role">CTO</p>
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

            {/* Open Positions Section */}
            <div className="about-positions-section">
              <h2 className="about-section-title">Join Our Team</h2>
              <p className="about-section-text" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 48px' }}>
                We're looking for talented individuals to help us build the future of blockchain gaming. Join us and be part of an innovative team creating immersive Web3 experiences.
              </p>
              <div className="about-positions-grid">
                <div className="about-position-card">
                  <div className="about-position-header">
                    <div className="about-position-icon">
                      <FaPalette />
                    </div>
                    <h3 className="about-position-title">UX/UI Engineer</h3>
                  </div>
                  <div className="about-position-info">
                    <span className="about-position-location">
                      <FaMapMarkerAlt /> Remote / Hybrid
                    </span>
                    <span className="about-position-seniority">
                      <FaUser /> Junior / Senior
                    </span>
                    <a href="mailto:careers@evofuse.games?subject=UX/UI Engineer Application" className="about-position-apply-btn">
                      Apply Now
                    </a>
                  </div>
                </div>
                <div className="about-position-card">
                  <div className="about-position-header">
                    <div className="about-position-icon">
                      <FaCode />
                    </div>
                    <h3 className="about-position-title">Frontend Developer</h3>
                  </div>
                  <div className="about-position-info">
                    <span className="about-position-location">
                      <FaMapMarkerAlt /> Remote / Hybrid
                    </span>
                    <span className="about-position-seniority">
                      <FaUser /> Junior / Senior
                    </span>
                    <a href="mailto:careers@evofuse.games?subject=Frontend Developer Application" className="about-position-apply-btn">
                      Apply Now
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

