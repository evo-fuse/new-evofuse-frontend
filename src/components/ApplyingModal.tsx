import { useState, useRef, useEffect } from 'react'
import { FaTimes, FaEnvelope, FaCheck, FaFileUpload, FaFile } from 'react-icons/fa'
import { useApplyingModal } from '../contexts/ApplyingModalContext'

function ApplyingModal() {
  const { isOpen, positionData, closeModal } = useApplyingModal()
  const [applicantName, setApplicantName] = useState('')
  const [applicantEmail, setApplicantEmail] = useState('')
  const [coverLetter, setCoverLetter] = useState('')
  const [resumeFile, setResumeFile] = useState<File | null>(null)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    coverLetter: false,
    resume: false
  })
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!isOpen) {
      // Reset form when modal closes
      setApplicantName('')
      setApplicantEmail('')
      setCoverLetter('')
      setResumeFile(null)
      setSubmitStatus('idle')
      setIsSubmitting(false)
      setErrors({ name: false, email: false, coverLetter: false, resume: false })
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
    }
  }, [isOpen])

  if (!isOpen || !positionData) return null

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setResumeFile(file)
    }
  }

  const handleUploadClick = () => {
    fileInputRef.current?.click()
  }

  const handleRemoveFile = () => {
    setResumeFile(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const validateForm = () => {
    const newErrors = {
      name: !applicantName.trim(),
      email: !applicantEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(applicantEmail),
      coverLetter: !coverLetter.trim(),
      resume: !resumeFile
    }
    setErrors(newErrors)
    return !Object.values(newErrors).some(error => error)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      setSubmitStatus('error')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const formDataToSend = new FormData()
      formDataToSend.append('name', applicantName)
      formDataToSend.append('email', applicantEmail)
      formDataToSend.append('position', positionData.title)
      formDataToSend.append('coverLetter', coverLetter)
      // Note: _to field may not work on all Formspree plans
      // Make sure contact@evofuse.xyz is set as the recipient in Formspree dashboard
      formDataToSend.append('_to', 'contact@evofuse.xyz')
      formDataToSend.append('_subject', `Job Application: ${positionData.title} - ${applicantName}`)
      // Set reply-to to the applicant's email
      formDataToSend.append('_replyto', applicantEmail)
      
      // Append file with name="upload" to match Formspree file upload field
      if (resumeFile) {
        formDataToSend.append('upload', resumeFile)
      }

      const response = await fetch('https://formspree.io/f/mkgkgoev', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      })

      // Parse response
      let responseData = null
      const contentType = response.headers.get('content-type')
      if (contentType && contentType.includes('application/json')) {
        try {
          responseData = await response.json()
        } catch (e) {
          console.warn('Failed to parse JSON response:', e)
        }
      }

      if (response.ok) {
        if (responseData) {
          console.log('Formspree success:', responseData)
        }
        setSubmitStatus('success')
        setApplicantName('')
        setApplicantEmail('')
        setCoverLetter('')
        setResumeFile(null)
        if (fileInputRef.current) {
          fileInputRef.current.value = ''
        }
        setTimeout(() => {
          closeModal()
        }, 2000)
      } else {
        // Log error for debugging
        if (responseData) {
          console.error('Formspree error:', responseData)
        } else {
          console.error('Formspree error - status:', response.status, response.statusText)
        }
        setSubmitStatus('error')
      }
    } catch (error) {
      // Log error for debugging
      console.error('Submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="applying-modal-overlay" onClick={closeModal}>
      <div className="applying-modal" onClick={(e) => e.stopPropagation()}>
        <button className="applying-modal-close" onClick={closeModal} aria-label="Close">
          <FaTimes />
        </button>
        <div className="applying-modal-content">
          <h2 className="applying-modal-title">Apply for Position</h2>
          <p className="applying-modal-position">{positionData.title}</p>
          
          <div className="applying-modal-section">
            <h3 className="applying-modal-section-title">Description</h3>
            <p className="applying-modal-description">{positionData.description}</p>
          </div>

          <div className="applying-modal-section">
            <h3 className="applying-modal-section-title">Responsibilities</h3>
            <ul className="applying-modal-list">
              {positionData.responsibilities.map((responsibility, index) => (
                <li key={index}>
                  <FaCheck className="applying-modal-list-icon" />
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="applying-modal-section">
            <h3 className="applying-modal-section-title">Technical Skills</h3>
            <ul className="applying-modal-list">
              {positionData.technicalSkills.map((skill, index) => (
                <li key={index}>
                  <FaCheck className="applying-modal-list-icon" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="applying-modal-section applying-modal-section-no-border">
            <h3 className="applying-modal-section-title">Compensation</h3>
            <p className="applying-modal-compensation">{positionData.compensation}</p>
          </div>

          <div className="applying-modal-separator"></div>

          <form 
            onSubmit={handleSubmit} 
            action="https://formspree.io/f/mkgkgoev" 
            method="POST"
            encType="multipart/form-data"
          >
            <div className="applying-modal-section">
              <h3 className="applying-modal-section-title">Your Information</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <input
                    type="text"
                    className={`applying-modal-input ${errors.name ? 'applying-modal-input-error' : ''}`}
                    placeholder="Full Name"
                    value={applicantName}
                    onChange={(e) => {
                      setApplicantName(e.target.value)
                      if (errors.name) {
                        setErrors(prev => ({ ...prev, name: !e.target.value.trim() }))
                      }
                    }}
                    onBlur={() => setErrors(prev => ({ ...prev, name: !applicantName.trim() }))}
                    required
                  />
                  {errors.name && <div className="applying-modal-error-message">Required</div>}
                </div>
                <div>
                  <input
                    type="email"
                    className={`applying-modal-input ${errors.email ? 'applying-modal-input-error' : ''}`}
                    placeholder="Email Address"
                    value={applicantEmail}
                    onChange={(e) => {
                      setApplicantEmail(e.target.value)
                      if (errors.email) {
                        const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value)
                        setErrors(prev => ({ ...prev, email: !e.target.value.trim() || !isValid }))
                      }
                    }}
                    onBlur={() => {
                      const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(applicantEmail)
                      setErrors(prev => ({ ...prev, email: !applicantEmail.trim() || !isValid }))
                    }}
                    required
                  />
                  {errors.email && <div className="applying-modal-error-message">Required</div>}
                </div>
              </div>
            </div>

            <div className="applying-modal-section">
              <h3 className="applying-modal-section-title">Cover Letter</h3>
              <textarea
                className={`applying-modal-textarea ${errors.coverLetter ? 'applying-modal-input-error' : ''}`}
                placeholder="Tell us why you're interested in this position..."
                value={coverLetter}
                onChange={(e) => {
                  setCoverLetter(e.target.value)
                  if (errors.coverLetter) {
                    setErrors(prev => ({ ...prev, coverLetter: !e.target.value.trim() }))
                  }
                }}
                onBlur={() => setErrors(prev => ({ ...prev, coverLetter: !coverLetter.trim() }))}
                rows={6}
              />
              {errors.coverLetter && <div className="applying-modal-error-message">Required</div>}
            </div>

            <div className="applying-modal-section">
              <h3 className="applying-modal-section-title">Resume</h3>
              <input
                type="file"
                name="upload"
                ref={fileInputRef}
                onChange={(e) => {
                  handleFileChange(e)
                  if (errors.resume && e.target.files?.[0]) {
                    setErrors(prev => ({ ...prev, resume: false }))
                  }
                }}
                accept=".pdf,.doc,.docx"
                style={{ display: 'none' }}
              />
              {!resumeFile ? (
                <div>
                  <button
                    type="button"
                    className={`applying-modal-upload-btn ${errors.resume ? 'applying-modal-upload-btn-error' : ''}`}
                    onClick={handleUploadClick}
                  >
                    <FaFileUpload />
                    Upload Resume
                  </button>
                  {errors.resume && <div className="applying-modal-error-message">Required</div>}
                </div>
              ) : (
                <div>
                  <div className="applying-modal-file-info">
                    <div className="applying-modal-file-name">
                      <FaFile />
                      <span>{resumeFile.name}</span>
                    </div>
                    <button
                      type="button"
                      className="applying-modal-remove-btn"
                      onClick={handleRemoveFile}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              )}
            </div>

            {submitStatus === 'success' && (
              <div className="applying-modal-message applying-modal-success">
                <FaCheck />
                <span>Application submitted successfully! We'll be in touch soon.</span>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="applying-modal-message applying-modal-error">
                <span>Oops! Something went wrong. Please try again.</span>
              </div>
            )}

            <div className="applying-modal-actions">
              <button 
                type="submit" 
                className="btn btn-primary applying-modal-btn"
                disabled={isSubmitting}
              >
                <FaEnvelope />
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
              <button 
                type="button" 
                className="btn btn-outline applying-modal-cancel-btn" 
                onClick={closeModal}
                disabled={isSubmitting}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ApplyingModal

