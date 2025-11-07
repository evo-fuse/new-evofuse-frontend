import { useEffect, useState } from 'react'
import { useLoading } from '../contexts/LoadingContext'
import ContactSkeleton from '../components/ContactSkeleton'

function ContactUsPage() {
  const { loading, setLoading } = useLoading()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  useEffect(() => {
    setLoading(true)
    const t = setTimeout(() => setLoading(false), 1000)
    return () => {
      clearTimeout(t)
      setLoading(false)
    }
  }, [setLoading])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setSubmitStatus('success')
    setTimeout(() => {
      setSubmitStatus('idle')
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  if (loading) {
    return <ContactSkeleton />
  }

  return (
    <div className="contact-page">
      <div className="container">
        <section className="section page-fade-in">
          <h1 className="contact-title">Let's work together</h1>
          <p className="contact-subtitle">
            Get in touch with us for any inquiries and questions
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-group">
              <label htmlFor="name" className="contact-label">NAME</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="contact-input"
                required
              />
            </div>

            <div className="contact-form-group">
              <label htmlFor="email" className="contact-label">WORK EMAIL</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="contact-input"
                required
              />
            </div>

            <div className="contact-form-group">
              <label htmlFor="message" className="contact-label">MESSAGE</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="contact-textarea"
                rows={6}
                required
              />
            </div>

            <div className="contact-form-footer">
              <p className="contact-form-note">
                By submitting this form, you agree to EvoFuse's Terms of Service, Privacy Policy, and EvoFuse contacting you.
              </p>
              <button type="submit" className="btn btn-primary contact-submit-btn">
                Submit
              </button>
            </div>

            {submitStatus === 'success' && (
              <div className="contact-form-message contact-form-success">
                Thank you for reaching out to us. We've received your message and will respond as soon as possible.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="contact-form-message contact-form-error">
                Oops! Something went wrong while submitting the form.
              </div>
            )}
          </form>
        </section>
      </div>
    </div>
  )
}

export default ContactUsPage

