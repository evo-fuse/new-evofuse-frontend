import { useEffect } from 'react'
import { useLoading } from '../contexts/LoadingContext'
import TermsSkeleton from '../components/TermsSkeleton'
import Lottie from 'lottie-react'
import v14Animation from '../assets/v1.4.json'

function PrivacyPolicyPage() {
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
            <h1 className="section-title">EvoFuse Privacy and Policy</h1>

            <div className="terms-section">
              <div className="terms-section-title">
                <h2>Privacy Policy</h2>
              </div>
              <div className="terms-section-content">
                <p>
                  Welcome to <strong>EvoFuse</strong>, a blockchain-based classic game ecosystem powered by the Fuse network. Your privacy is important to us. This Privacy Policy outlines how we collect, use, share, and protect your information when you use the EvoFuse web or mobile applications.
                </p>
              </div>
            </div>
            <div className="terms-separator"></div>

            <div className="terms-section">
              <div className="terms-section-title">
                <h2>1. Information We Collect</h2>
              </div>
              <div className="terms-section-content">
                <p>We may collect the following types of information:</p>
                <h3>a. <strong>Gameplay Data</strong></h3>
                <ul>
                  <li>Game scores, highest tile values, items used, custom themes purchased</li>
                  <li>Full play history (exported/imported as <code>.json</code> files)</li>
                  <li>Interaction logs (e.g., time played, grid size used, in-game item usage)</li>
                </ul>
                <h3>b. <strong>Wallet Information</strong></h3>
                <ul>
                  <li>Public blockchain wallet addresses for authentication, reward issuance, and transaction history</li>
                  <li>DWAT token balance and usage within the EvoFuse ecosystem</li>
                </ul>
                <h3>c. <strong>Transaction Data</strong></h3>
                <ul>
                  <li>Purchases of in-game themes/items ($1.99 themes, token purchases)</li>
                  <li>On-chain transactions (token transfers, reward claims, NFT acquisitions)</li>
                </ul>
                <h3>d. <strong>Optional Personal Data (only if voluntarily provided)</strong></h3>
                <ul>
                  <li>Email address (for support or newsletter)</li>
                  <li>Social profiles (if connected via referral, sharing, or competitions)</li>
                </ul>
              </div>
            </div>
            <div className="terms-separator"></div>

            <div className="terms-section">
              <div className="terms-section-title">
                <h2>2. How We Use Your Information</h2>
              </div>
              <div className="terms-section-content">
                <p>We use your information to:</p>
                <ul>
                  <li>Provide and improve the EvoFuse gameplay experience</li>
                  <li>Issue DWAT token rewards based on gameplay performance</li>
                  <li>Enable user-customized themes and play tracking</li>
                  <li>Facilitate in-game purchases and blockchain transactions</li>
                  <li>Secure the platform and prevent fraud or abuse</li>
                  <li>Analyze gameplay trends and user behavior for feature improvements</li>
                </ul>
              </div>
            </div>
            <div className="terms-separator"></div>

            <div className="terms-section">
              <div className="terms-section-title">
                <h2>3. Blockchain Data</h2>
              </div>
              <div className="terms-section-content">
                <p>
                  All blockchain-related data (wallet addresses, token balances, in-game reward transactions) is <strong>public and immutable</strong> by design. Please be aware that interactions on the Fuse blockchain are visible to anyone and cannot be modified or deleted.
                </p>
              </div>
            </div>
            <div className="terms-separator"></div>

            <div className="terms-section">
              <div className="terms-section-title">
                <h2>4. Data Sharing</h2>
              </div>
              <div className="terms-section-content">
                <p>We <strong>do not sell</strong> or rent your personal information. However, we may share your data in the following situations:</p>
                <ul>
                  <li><strong>Service Providers:</strong> For payment processing, cloud hosting, analytics (non-personalized)</li>
                  <li><strong>Legal Compliance:</strong> To comply with legal obligations or court orders</li>
                  <li><strong>Aggregated Statistics:</strong> Non-identifiable gameplay trends for public or partner reporting</li>
                </ul>
              </div>
            </div>
            <div className="terms-separator"></div>

            <div className="terms-section">
              <div className="terms-section-title">
                <h2>5. Cookies & Analytics</h2>
              </div>
              <div className="terms-section-content">
                <p>We may use <strong>cookies</strong> or <strong>local storage</strong> to:</p>
                <ul>
                  <li>Remember your theme and UI preferences</li>
                  <li>Track session data for analytics</li>
                  <li>Improve game loading times and responsiveness</li>
                </ul>
                <p>You can disable cookies in your browser settings, though this may affect game performance.</p>
              </div>
            </div>
            <div className="terms-separator"></div>

            <div className="terms-section">
              <div className="terms-section-title">
                <h2>6. Data Security</h2>
              </div>
              <div className="terms-section-content">
                <p>We implement modern technical and organizational safeguards, including:</p>
                <ul>
                  <li>Encrypted communication (HTTPS)</li>
                  <li>Secure wallet authentication</li>
                  <li>Limited access to backend game servers and logs</li>
                </ul>
                <p>However, no online system is 100% secure. By using EvoFuse, you acknowledge the risks of online data transmission.</p>
              </div>
            </div>
            <div className="terms-separator"></div>

            <div className="terms-section">
              <div className="terms-section-title">
                <h2>7. Third-Party Services</h2>
              </div>
              <div className="terms-section-content">
                <p>
                  Our platform may link to or integrate with third-party services (e.g., Fuse blockchain explorer, payment providers). Please review their respective privacy policies.
                </p>
              </div>
            </div>
            <div className="terms-separator"></div>

            <div className="terms-section">
              <div className="terms-section-title">
                <h2>8. Updates to This Policy</h2>
              </div>
              <div className="terms-section-content">
                <p>
                  We may update this Privacy Policy from time to time. We will notify users of any significant changes via in-app messages or website banners.
                </p>
              </div>
            </div>
            <div className="terms-separator"></div>

            <div className="terms-section">
              <div className="terms-section-title">
                <h2>9. Contact Us</h2>
              </div>
              <div className="terms-section-content">
                <p>
                  If you have any questions or concerns about this policy or your data, please contact us at:
                </p>
                <p>
                  <a href="mailto:privacy@evofuse.games"><strong>privacy@evofuse.games</strong></a>
                </p>
                <p>
                  <a href="https://evofuse.games/privacy-policy"><strong>https://evofuse.games/privacy-policy</strong></a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default PrivacyPolicyPage

