import { useEffect, useState, useRef } from 'react'
import slideRunning from '@slides/running.png'
import slideImagine from '@slides/imaginzation.png'
import slideSell from '@slides/sell.png'
import slideTree from '@slides/tree.png'
import slideGround from '@slides/ground.png'
import slideMac from '@slides/mac.png'

function HeroSlideshow() {
  const slides = [
    { src: slideRunning, title: 'EvoFuse: Classic Games Reborn on Web3', desc: 'Rediscover the games you love—EvoFuse fuses timeless gameplay with real blockchain rewards on the Fuse Network.', badge: 'Web3 Gaming', cta: 'Explore Games' },
    { src: slideImagine, title: 'One Ecosystem, Infinite Play', desc: 'From 2048 to Othello and Flappybird, EvoFuse unites classic titles into one connected, reward-powered arcade universe.', badge: 'Arcade', cta: 'Play Now' },
    { src: slideSell, title: 'Earn DWAT by Playing Smart', desc: 'Your skills generate value—hit milestones, climb leaderboards, and collect DWAT tokens to use throughout the platform.', badge: 'Earn Rewards', cta: 'Start Earning' },
    { src: slideTree, title: 'Customize, Create, and Share', desc: 'Shape EvoFuse your way—build new themes, adjust mechanics, and release original creations to showcase or monetize.', badge: 'Customize', cta: 'Create Now' },
    { src: slideGround, title: 'Powered by Players, Built for the Future', desc: 'With NFTs, betting modes, and a creator economy ahead, EvoFuse is crafting the next-generation Web3 arcade.', badge: 'Future', cta: 'Learn More' },
    { src: slideMac, title: 'EvoFuse PC App: Evolve Your Mastery', desc: 'Unlock advanced tools like AI Theme Agent for instant theme creation and Play Record Replay for strategic learning—exclusive to the PC app.', badge: 'PC App', cta: 'Download Now' },
  ]

  // Random vertical positions for each slide: 'top', 'middle', 'bottom'
  const slidePositions: ('top' | 'middle' | 'bottom')[] = ['top', 'middle', 'bottom', 'top', 'bottom', 'middle']
  
  const getSlidePosition = (index: number): string => {
    return slidePositions[index % slidePositions.length]
  }

  const [currentIndex, setCurrentIndex] = useState(0)
  const [dragStart, setDragStart] = useState<number | null>(null)
  const [isDragging, setIsDragging] = useState(false)
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
  }

  const getDragTransform = () => {
    // No visual transform effects during dragging
    return {}
  }

  const getImageTransform = () => {
    // No visual transform effects during dragging
    return {}
  }

  const getCaptionTransform = () => {
    // No visual transform effects during dragging
    return {}
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
                ...(index === currentIndex && isDragging ? getDragTransform() : {})
              }}
            >
              <img 
                src={slide.src} 
                alt={slide.title} 
                draggable="false"
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "auto"}
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


