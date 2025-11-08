import { createContext, useContext, useState, type ReactNode } from 'react'

export interface PositionData {
  title: string
  description: string
  responsibilities: string[]
  technicalSkills: string[]
  compensation: string
}

interface ApplyingModalContextType {
  isOpen: boolean
  positionData: PositionData | null
  openModal: (positionData: PositionData) => void
  closeModal: () => void
}

const ApplyingModalContext = createContext<ApplyingModalContextType | undefined>(undefined)

export function ApplyingModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [positionData, setPositionData] = useState<PositionData | null>(null)

  const openModal = (data: PositionData) => {
    setPositionData(data)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
    setPositionData(null)
  }

  return (
    <ApplyingModalContext.Provider value={{ isOpen, positionData, openModal, closeModal }}>
      {children}
    </ApplyingModalContext.Provider>
  )
}

export function useApplyingModal() {
  const context = useContext(ApplyingModalContext)
  if (context === undefined) {
    throw new Error('useApplyingModal must be used within an ApplyingModalProvider')
  }
  return context
}

