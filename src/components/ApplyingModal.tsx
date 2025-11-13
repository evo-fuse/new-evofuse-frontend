import { useState, useRef, useEffect } from 'react'
import { FaTimes, FaEnvelope, FaCheck, FaFileUpload, FaFile } from 'react-icons/fa'
import { useApplyingModal } from '../contexts/ApplyingModalContext'

function ApplyingModal() {
  const { isOpen, positionData, closeModal } = useApplyingModal()
  const [coverLetter, setCoverLetter] = useState('')
  const [resumeFile, setResumeFile] = useState<File | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!isOpen) {
      // Reset form when modal closes
      setCoverLetter('')
      setResumeFile(null)
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

  const emailSubject = `${positionData.title} Application`
  const emailBody = coverLetter ? `\n\nCover Letter:\n${coverLetter}` : ''
  const emailLink = `mailto:contact@evofuse.xyz?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`

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

          <div className="applying-modal-section">
            <h3 className="applying-modal-section-title">Compensation</h3>
            <p className="applying-modal-compensation">{positionData.compensation}</p>
          </div>

          <div className="applying-modal-section">
            <h3 className="applying-modal-section-title">Cover Letter</h3>
            <textarea
              className="applying-modal-textarea"
              placeholder="Tell us why you're interested in this position..."
              value={coverLetter}
              onChange={(e) => setCoverLetter(e.target.value)}
              rows={6}
            />
          </div>

          <div className="applying-modal-section">
            <h3 className="applying-modal-section-title">Resume</h3>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx"
              style={{ display: 'none' }}
            />
            {!resumeFile ? (
              <button
                type="button"
                className="applying-modal-upload-btn"
                onClick={handleUploadClick}
              >
                <FaFileUpload />
                Upload Resume
              </button>
            ) : (
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
            )}
          </div>

          <div className="applying-modal-actions">
            <a 
              href={emailLink} 
              className="btn btn-primary applying-modal-btn"
              onClick={closeModal}
            >
              <FaEnvelope />
              Send Application Email
            </a>
            <button className="btn btn-outline applying-modal-cancel-btn" onClick={closeModal}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApplyingModal

