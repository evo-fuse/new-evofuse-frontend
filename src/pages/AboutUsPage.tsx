import { useEffect } from 'react'
import { useLoading } from '../contexts/LoadingContext'
import { useApplyingModal, type PositionData } from '../contexts/ApplyingModalContext'
import AboutUsSkeleton from '../components/AboutUsSkeleton'
import { FaLinkedin, FaFacebook, FaCode, FaPalette, FaMapMarkerAlt, FaUser } from 'react-icons/fa'
import { FaDiscord } from 'react-icons/fa6'
import johnAvatar from '../assets/teams/John Guerrero.png'
import felixAvatar from '../assets/teams/Felix Hansen.png'
import leonAvatar from '../assets/teams/Leon Weber.png'

const positionData: Record<string, PositionData> = {
  'UX/UI Engineer': {
    title: 'UX/UI Engineer',
    description: 'We are seeking a talented UX/UI Engineer to design and implement beautiful, intuitive user interfaces for our gaming platform. You will create seamless user experiences that bridge traditional gaming with Web3 technology, ensuring our games are both visually stunning and highly functional.',
    responsibilities: [
      'Design and implement user interfaces for web and mobile gaming applications',
      'Create wireframes, prototypes, and high-fidelity designs using modern design tools',
      'Collaborate with developers to ensure pixel-perfect implementation of designs',
      'Conduct user research and usability testing to improve user experience',
      'Develop and maintain design systems and component libraries',
      'Work closely with product managers and stakeholders to define user requirements',
      'Optimize interfaces for performance and accessibility across all devices'
    ],
    technicalSkills: [
      'Proficiency in Figma, Adobe XD, or similar design tools',
      'Strong knowledge of React, TypeScript, and modern frontend frameworks',
      'Experience with responsive design and mobile-first development',
      'Understanding of Web3 and blockchain user experience patterns',
      'Knowledge of CSS, SCSS, and modern styling techniques',
      'Familiarity with design systems and component-based architecture',
      'Experience with user testing and prototyping tools'
    ],
    compensation: 'Competitive salary based on experience, plus equity options, health benefits, and flexible work arrangements. Salary range: $70,000 - $120,000 USD annually.'
  },
  '3D Game Developer': {
    title: '3D Game Developer',
    description: 'Join our team as a 3D Game Developer to build immersive gaming experiences using cutting-edge 3D technologies. You will work on creating engaging game mechanics, optimizing performance, and bringing our game concepts to life with stunning 3D graphics and animations.',
    responsibilities: [
      'Develop 3D game features and mechanics using modern game engines',
      'Create and optimize 3D models, textures, and animations',
      'Implement game physics, collision detection, and rendering systems',
      'Optimize game performance for web and mobile platforms',
      'Collaborate with designers and artists to bring game concepts to life',
      'Debug and fix technical issues across different platforms',
      'Stay updated with latest 3D gaming technologies and best practices'
    ],
    technicalSkills: [
      'Proficiency in Unity, Unreal Engine, or Three.js',
      'Strong programming skills in C#, C++, or JavaScript/TypeScript',
      'Experience with 3D modeling tools (Blender, Maya, or 3ds Max)',
      'Knowledge of shader programming and graphics rendering',
      'Understanding of game physics and animation systems',
      'Experience with WebGL and WebGPU technologies',
      'Familiarity with blockchain integration in games'
    ],
    compensation: 'Competitive salary based on experience, plus equity options, health benefits, and flexible work arrangements. Salary range: $60,000 - $80,000 USD annually.'
  }
}

function AboutUsPage() {
  const { loading, setLoading } = useLoading()
  const { openModal } = useApplyingModal()

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
                    <img src={felixAvatar} alt="Felix Hansen" />
                  </div>
                  <h3 className="about-team-name">Felix Hansen</h3>
                  <p className="about-team-role">CEO</p>
                  <div className="about-team-social">
                    <a href="https://www.linkedin.com/in/felix-hansen-334040254/" className="about-team-social-link" aria-label="LinkedIn">
                      <FaLinkedin />
                    </a>
                    <a href="https://discord.com/users/750641854555480114" className="about-team-social-link" aria-label="Discord">
                      <FaDiscord />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100072105534212" className="about-team-social-link" aria-label="Facebook">
                      <FaFacebook />
                    </a>
                  </div>
                </div>
                <div className="about-team-member">
                  <div className="about-team-avatar">
                    <img src={leonAvatar} alt="Leon Weber" />
                  </div>
                  <h3 className="about-team-name">Leon Weber</h3>
                  <p className="about-team-role">Founding Engineer</p>
                  <div className="about-team-social">
                    <a href="https://www.linkedin.com/in/leon-weber-334040254/" className="about-team-social-link" aria-label="LinkedIn">
                      <FaLinkedin />
                    </a>
                    <a href="https://discord.com/users/51233535480716810" className="about-team-social-link" aria-label="Discord">
                      <FaDiscord />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100081445071508" className="about-team-social-link" aria-label="Facebook">
                      <FaFacebook />
                    </a>
                  </div>
                </div>
                <div className="about-team-member">
                  <div className="about-team-avatar">
                    <img src={johnAvatar} alt="John Guerrero" />
                  </div>
                  <h3 className="about-team-name">John Guerrero</h3>
                  <p className="about-team-role">Founding Engineer</p>
                  <div className="about-team-social">
                    <a href="https://www.linkedin.com/in/john-guerrero-56425b254/" className="about-team-social-link" aria-label="LinkedIn">
                      <FaLinkedin />
                    </a>
                    <a href="https://discord.com/users/32941329534215345694" className="about-team-social-link" aria-label="Discord">
                      <FaDiscord />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100063729296202" className="about-team-social-link" aria-label="Facebook">
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
                    <button 
                      className="about-position-apply-btn"
                      onClick={(e) => {
                        e.preventDefault()
                        openModal(positionData['UX/UI Engineer'])
                      }}
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
                <div className="about-position-card">
                  <div className="about-position-header">
                    <div className="about-position-icon">
                      <FaCode />
                    </div>
                    <h3 className="about-position-title">3D Game Developer</h3>
                  </div>
                  <div className="about-position-info">
                    <span className="about-position-location">
                      <FaMapMarkerAlt /> Remote / Hybrid
                    </span>
                    <span className="about-position-seniority">
                      <FaUser /> Junior / Senior
                    </span>
                    <button 
                      className="about-position-apply-btn"
                      onClick={(e) => {
                        e.preventDefault()
                        openModal(positionData['3D Game Developer'])
                      }}
                    >
                      Apply Now
                    </button>
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

