import { useEffect, useState, useRef } from 'react'
import slideRunning from '@slides/running.png'
import slideImagine from '@slides/imaginzation.png'
import slideSell from '@slides/sell.png'
import slideTree from '@slides/tree.png'
import slideGround from '@slides/ground.png'
import slideMac from '@slides/mac.png'

function HeroSlideshow() {
  const slides = [
    { src: slideRunning, title: 'EvoFuse: Classic Games Reborn on the Blockchain', desc: 'Rediscover your favorite games through a modern Web3 lens—EvoFuse merges nostalgic gameplay with real token rewards on the Fuse Network.', badge: 'Web3 Gaming', cta: 'Explore Games' },
    { src: slideImagine, title: 'One Ecosystem, Endless Games', desc: 'From 2048 to future classics like Othello and Flappybird, EvoFuse brings them all together in a unified, reward-powered arcade experience.', badge: 'Arcade', cta: 'Play Now' },
    { src: slideSell, title: 'Earn While You Play with DWAT', desc: 'Your skills are your currency—achieve high scores, unlock milestones, and get rewarded with DWAT tokens you can use across the platform.', badge: 'Earn Rewards', cta: 'Start Earning' },
    { src: slideTree, title: 'Fully Customizable, Truly Yours', desc: 'Everything in EvoFuse can be tailored—create your own themes, tweak gameplay mechanics, and even design new experiences to share or sell.', badge: 'Customize', cta: 'Create Now' },
    { src: slideGround, title: 'Share, Compete, and Learn Together', desc: 'Record and replay every move, study top players, and join a growing social hub where games become stories and strategies are shared.', badge: 'Community', cta: 'Join Now' },
    { src: slideMac, title: 'The Future is Player-Owned', desc: 'With betting games, NFTs, and a creator-driven economy on the horizon, EvoFuse is building the next-generation Web3 arcade—powered by you.', badge: 'Future', cta: 'Learn More' },
  ]

  // Random vertical positions for each slide: 'top', 'middle', 'bottom'
  const slidePositions: ('top' | 'middle' | 'bottom')[] = ['top', 'middle', 'bottom', 'top', 'bottom', 'middle']
  
  const getSlidePosition = (index: number): string => {
    return slidePositions[index % slidePositions.length]
  }

  const [currentIndex, setCurrentIndex] = useState(0)
  const [dragStart, setDragStart] = useState<number | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [dragCurrent, setDragCurrent] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length)
    }, 10000)
    return () => clearInterval(interval)
  }, [slides.length])

  const goToSlide = (index: number) => setCurrentIndex(index)
  const goToPrevious = () => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
  const goToNext = () => setCurrentIndex((prev) => (prev + 1) % slides.length)

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
    setDragStart(clientX)
    setIsDragging(true)
  }

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (dragStart === null || !isDragging) return
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
    setDragCurrent(clientX)
    if ('touches' in e) {
      e.preventDefault()
    }
  }

  const handleDragEnd = (e: React.MouseEvent | React.TouchEvent) => {
    if (dragStart === null) return
    
    const clientX = 'changedTouches' in e ? e.changedTouches[0].clientX : e.clientX
    const diff = dragStart - clientX
    const threshold = 50 // Minimum drag distance to trigger slide change

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        // Dragged left - go to next slide
        goToNext()
      } else {
        // Dragged right - go to previous slide
        goToPrevious()
      }
    }

    setDragStart(null)
    setIsDragging(false)
    setDragCurrent(null)
  }

  const getDragTransform = () => {
    if (dragStart === null || dragCurrent === null || !isDragging) {
      return { 
        transform: 'perspective(1500px) rotateY(0deg) rotateX(0deg) translateZ(0px) scale(1)',
        transformStyle: 'preserve-3d' as const
      }
    }
    
    const diff = dragCurrent - dragStart
    const maxRotation = 30 // Increased maximum rotation angle in degrees
    const maxTranslation = 120 // Increased maximum translation in pixels
    const maxScale = 0.05 // Scale effect (5% scale change)
    const containerWidth = containerRef.current?.offsetWidth || 1200
    
    // Calculate rotation based on drag distance (normalized to container width)
    const rotation = (diff / containerWidth) * maxRotation
    // Clamp rotation to max values
    const clampedRotation = Math.max(-maxRotation, Math.min(maxRotation, rotation))
    
    // Calculate translation (move in the direction of drag)
    const translation = (diff / containerWidth) * maxTranslation
    const clampedTranslation = Math.max(-maxTranslation, Math.min(maxTranslation, translation))
    
    // Stronger vertical tilt based on horizontal drag for more dramatic 3D effect
    const verticalTilt = (clampedRotation / maxRotation) * 12 // Up to 12 degrees vertical tilt
    
    // Scale effect - slightly scale down when dragging for depth
    const scale = 1 - (Math.abs(clampedRotation) / maxRotation) * maxScale
    
    return {
      transform: `perspective(1500px) rotateY(${clampedRotation}deg) rotateX(${verticalTilt}deg) translateZ(${clampedTranslation}px) scale(${scale})`,
      transformStyle: 'preserve-3d' as const,
      transition: 'none' // No transition during drag for immediate response
    }
  }

  const getImageTransform = () => {
    if (dragStart === null || dragCurrent === null || !isDragging) {
      return {}
    }
    
    const diff = dragCurrent - dragStart
    const containerWidth = containerRef.current?.offsetWidth || 1200
    const rotation = (diff / containerWidth) * 30
    const clampedRotation = Math.max(-30, Math.min(30, rotation))
    
    // Parallax effect - image moves slightly in opposite direction
    const parallaxOffset = (clampedRotation / 30) * 20
    
    return {
      transform: `translateX(${parallaxOffset}px) translateZ(30px)`,
      transition: 'none'
    }
  }

  const getCaptionTransform = () => {
    if (dragStart === null || dragCurrent === null || !isDragging) {
      return {}
    }
    
    const diff = dragCurrent - dragStart
    const containerWidth = containerRef.current?.offsetWidth || 1200
    const rotation = (diff / containerWidth) * 30
    const clampedRotation = Math.max(-30, Math.min(30, rotation))
    
    // Parallax effect - caption moves in opposite direction for depth
    const parallaxOffset = (clampedRotation / 30) * -15
    
    return {
      transform: `translateX(${parallaxOffset}px) translateZ(20px)`,
      transition: 'none'
    }
  }

  return (
    <div className="hero-slideshow">
      <div className="slideshow-container" ref={containerRef}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? 'active' : ''} ${index % 2 === 1 ? 'reverse' : ''} ${isDragging && index === currentIndex ? 'dragging' : ''}`}
          >
            <div 
              className="slide-inner"
              onMouseDown={index === currentIndex ? handleDragStart : undefined}
              onMouseMove={index === currentIndex ? handleDragMove : undefined}
              onMouseUp={index === currentIndex ? handleDragEnd : undefined}
              onMouseLeave={index === currentIndex ? handleDragEnd : undefined}
              onTouchStart={index === currentIndex ? handleDragStart : undefined}
              onTouchMove={index === currentIndex ? handleDragMove : undefined}
              onTouchEnd={index === currentIndex ? handleDragEnd : undefined}
              style={{ 
                cursor: index === currentIndex ? (isDragging ? 'grabbing' : 'grab') : 'default',
                ...(index === currentIndex && isDragging ? getDragTransform() : {})
              }}
            >
              <img 
                src={slide.src} 
                alt={slide.title} 
                draggable="false"
                style={index === currentIndex && isDragging ? getImageTransform() : {}}
              />
              <div 
                className={`slide-caption slide-caption-${getSlidePosition(index)}`}
                style={index === currentIndex && isDragging ? getCaptionTransform() : {}}
              >
                <div className="title">{slide.title}</div>
                {/* <div className="slide-separator"></div> */}
                <div className="desc">{slide.desc}</div>
              </div>
            </div>
          </div>
        ))}
        {/* <button className="slide-nav slide-prev" onClick={goToPrevious} aria-label="Previous slide">
          ‹
        </button>
        <button className="slide-nav slide-next" onClick={goToNext} aria-label="Next slide">
          ›
        </button> */}
      </div>
      <div className="slide-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default HeroSlideshow


