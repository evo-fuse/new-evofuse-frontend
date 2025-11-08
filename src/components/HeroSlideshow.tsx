import { useEffect, useState } from 'react'
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length)
    }, 10000)
    return () => clearInterval(interval)
  }, [slides.length])

  const goToSlide = (index: number) => setCurrentIndex(index)
  const goToPrevious = () => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
  const goToNext = () => setCurrentIndex((prev) => (prev + 1) % slides.length)

  return (
    <div className="hero-slideshow">
      <div className="slideshow-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? 'active' : ''} ${index % 2 === 1 ? 'reverse' : ''}`}
          >
            <div className="slide-inner">
              <img src={slide.src} alt={slide.title} />
              <div className={`slide-caption slide-caption-${getSlidePosition(index)}`}>
                <div className="title">{slide.title}</div>
                <div className="slide-separator"></div>
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


