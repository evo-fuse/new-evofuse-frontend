import { FaTimes } from 'react-icons/fa'
import { useComingSoonModal } from '../contexts/ComingSoonModalContext'

function ComingSoonModal() {
  const { isOpen, selectedGame, closeModal } = useComingSoonModal()

  if (!isOpen) return null

  return (
    <div className="coming-soon-modal-overlay" onClick={closeModal}>
      <div className="coming-soon-modal" onClick={(e) => e.stopPropagation()}>
        <button className="coming-soon-modal-close" onClick={closeModal} aria-label="Close">
          <FaTimes />
        </button>
        <div className="coming-soon-modal-content">
          <h2 className="coming-soon-modal-title">Coming Soon</h2>
          <p className="coming-soon-modal-game">{selectedGame}</p>
          <p className="coming-soon-modal-message">
            We're working hard to bring you an amazing gaming experience. Stay tuned for updates!
          </p>
          <button className="btn btn-primary coming-soon-modal-btn" onClick={closeModal}>
            Got it
          </button>
        </div>
      </div>
    </div>
  )
}

export default ComingSoonModal

