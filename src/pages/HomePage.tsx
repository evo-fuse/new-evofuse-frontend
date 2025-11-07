import HeroSlideshow from '../components/HeroSlideshow'
import FeaturedGames from '../components/FeaturedGames'
import LatestBlogPosts from '../components/LatestBlogPosts'

function HomePage() {
  return (
    <>
      <HeroSlideshow />
      <div className="content-shell">
        <div className="container">
          <FeaturedGames limit={3} />
          <LatestBlogPosts limit={3} />
        </div>
      </div>
    </>
  )
}

export default HomePage


