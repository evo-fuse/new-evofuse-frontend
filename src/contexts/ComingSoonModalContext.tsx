import { createContext, useContext, useState, type ReactNode } from 'react'

interface ComingSoonModalContextType {
  isOpen: boolean
  selectedGame: string | null
  openModal: (gameTitle: string) => void
  closeModal: () => void
}

const ComingSoonModalContext = createContext<ComingSoonModalContextType | undefined>(undefined)

export function ComingSoonModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedGame, setSelectedGame] = useState<string | null>(null)

  const openModal = (gameTitle: string) => {
    setSelectedGame(gameTitle)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
    setSelectedGame(null)
  }

  return (
    <ComingSoonModalContext.Provider value={{ isOpen, selectedGame, openModal, closeModal }}>
      {children}
    </ComingSoonModalContext.Provider>
  )
}

export function useComingSoonModal() {
  const context = useContext(ComingSoonModalContext)
  if (context === undefined) {
    throw new Error('useComingSoonModal must be used within a ComingSoonModalProvider')
  }
  return context
}

