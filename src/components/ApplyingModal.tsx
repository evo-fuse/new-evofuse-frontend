import { FaTimes, FaEnvelope, FaCheck } from 'react-icons/fa'
import { useApplyingModal } from '../contexts/ApplyingModalContext'

function ApplyingModal() {
  const { isOpen, positionData, closeModal } = useApplyingModal()

  if (!isOpen || !positionData) return null

  const emailSubject = `${positionData.title} Application`
  const emailLink = `mailto:careers@evofuse.games?subject=${encodeURIComponent(emailSubject)}`

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

