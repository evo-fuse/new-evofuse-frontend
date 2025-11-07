import { useEffect } from 'react'
import { useLoading } from '../contexts/LoadingContext'
import TermsSkeleton from '../components/TermsSkeleton'
import Lottie from 'lottie-react'
import v14Animation from '../assets/v1.4.json'

function TermsPage() {
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
    return <TermsSkeleton />
  }

  return (
    <div className="terms-page">
      <div className="container">
        <section className="section page-fade-in">
          <div className="terms-content">
            <div className="terms-header-image">
              <Lottie animationData={v14Animation} className="terms-lottie" loop={true} />
            </div>
            <h1 className="section-title">EvoFuse 2048 — Terms and Conditions</h1>
            <p><strong>Effective Date:</strong> [Insert Date]</p>
            <p><strong>Last Updated:</strong> [Insert Date]</p>
            <p>
              Welcome to EvoFuse 2048, a blockchain-integrated puzzle gaming experience powered by the Fuse Network and the DWAT token. By using this game, you agree to the following Terms and Conditions. If you do not agree, please discontinue use of the platform.
            </p>

            <div className="terms-section">
              <div className="terms-section-title">
                <h2>1. User Eligibility</h2>
              </div>
              <div className="terms-section-content">
                <ul>
                  <li>Be at least 13 years of age, or the age of digital consent in your country.</li>
                  <li>Have a valid Fuse-compatible wallet to access token-related features.</li>
                  <li>Agree not to violate any applicable laws or regulations.</li>
                </ul>
              </div>
            </div>
            <div className="terms-separator"></div>

            <div className="terms-section">
              <div className="terms-section-title">
                <h2>2. Gameplay Rules</h2>
              </div>
              <div className="terms-section-content">
                <ul>
                  <li>Users are allowed to play EvoFuse 2048 in either the default theme or in any custom or purchased themes.</li>
                  <li>Players can earn DWAT tokens based on their gameplay performance under the defined reward criteria.</li>
                  <li>Users can purchase and use various items, but once an item is purchased, it cannot be resold.</li>
                </ul>
              </div>
            </div>
            <div className="terms-separator"></div>

            <div className="terms-section">
              <div className="terms-section-title">
                <h2>3. Custom Theme Policy</h2>
              </div>
              <div className="terms-section-content">
                <p>EvoFuse allows users to create and purchase custom themes for personal or community use. However, all submitted themes are subject to moderation.</p>
                <h3>Prohibited Content</h3>
                <p>Users must not create, upload, promote, or distribute themes that:</p>
                <ul>
                  <li>Contain sexually explicit, pornographic, or obscene content.</li>
                  <li>Contain graphic violence, gore, or any depictions of physical abuse.</li>
                  <li>Promote hate speech, racism, sexism, homophobia, or discrimination against any group.</li>
                  <li>Intentionally insult, mock, defame, or harass individuals or groups.</li>
                  <li>Include any political propaganda, extremist content, or misinformation.</li>
                </ul>
              </div>
            </div>
            <div className="terms-separator"></div>

            <div className="terms-section">
              <div className="terms-section-title">
                <h2>4. Penalties and Enforcement</h2>
              </div>
              <div className="terms-section-content">
                <p>Violation of the content policy outlined above will result in immediate penalties, including but not limited to:</p>
                <ul>
                  <li>Theme rejection and removal without notice.</li>
                  <li>Permanent account suspension, preventing future use of EvoFuse 2048.</li>
                  <li>Token withdrawal restriction, including freezing or blocking DWAT token balances associated with the violating account.</li>
                  <li>Public listing bans, which prevent the violator's themes from appearing on community boards or marketplaces.</li>
                  <li>Reporting to Fuse Network authorities or related partners in cases of abuse or criminal content.</li>
                </ul>
                <p>EvoFuse reserves the right to take legal action in cases of serious violations.</p>
              </div>
            </div>
            <div className="terms-separator"></div>

            <div className="terms-section">
              <div className="terms-section-title">
                <h2>5. Token and Reward System</h2>
              </div>
              <div className="terms-section-content">
                <ul>
                  <li>DWAT tokens earned through gameplay are distributed automatically based on score and tile progress.</li>
                  <li>Token values and reward logic may be updated periodically and without prior notice.</li>
                  <li>Abuse of the reward system (e.g., botting, replay spoofing) will lead to disqualification, token freezing, and account banning.</li>
                </ul>
              </div>
            </div>
            <div className="terms-separator"></div>

            <div className="terms-section">
              <div className="terms-section-title">
                <h2>6. User-Generated Content Licensing</h2>
              </div>
              <div className="terms-section-content">
                <p>By submitting any custom theme, you grant EvoFuse a non-exclusive, royalty-free, worldwide license to display, distribute, and promote the theme within the game ecosystem.</p>
              </div>
            </div>
            <div className="terms-separator"></div>

            <div className="terms-section">
              <div className="terms-section-title">
                <h2>7. Limitation of Liability</h2>
              </div>
              <div className="terms-section-content">
                <p>EvoFuse, its team, and affiliated partners are not liable for any losses, damages, or claims arising from the use of the game, token volatility, or user-generated content.</p>
              </div>
            </div>
            <div className="terms-separator"></div>

            <div className="terms-section">
              <div className="terms-section-title">
                <h2>8. Termination</h2>
              </div>
              <div className="terms-section-content">
                <p>We reserve the right to suspend or terminate your access to EvoFuse 2048 at any time, with or without cause, especially in the event of any violation of these Terms.</p>
              </div>
            </div>
            <div className="terms-separator"></div>

            <div className="terms-section">
              <div className="terms-section-title">
                <h2>9. Changes to These Terms</h2>
              </div>
              <div className="terms-section-content">
                <p>EvoFuse may update these Terms and Conditions at any time. Continued use of the platform after such updates constitutes your acceptance of the new terms.</p>
              </div>
            </div>
            <div className="terms-separator"></div>

            <div className="terms-section">
              <div className="terms-section-title">
                <h2>10. Contact</h2>
              </div>
              <div className="terms-section-content">
                <p>For any questions regarding these Terms and Conditions, please contact: <a href="mailto:support@evofuse.xyz">support@evofuse.xyz</a></p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default TermsPage


