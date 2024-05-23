import styles from './Home.module.css';
import headerBackgroundImage from '../assets/coffee-farm.jpg';
import InfiniteCarousel from '../components/InfiniteCarousel';
import Post from '../components/Post';
import coffeeOriginImage from '../assets/coffee-origin.avif';
import coffeeRoastImage from '../assets/coffee-roast.avif';
import coffeeBrewImage from '../assets/coffee-brew.avif';

const images = [
  'https://iili.io/H8Y5Sgj.webp',
  'https://iili.io/H8Y7EhP.webp',
  'https://iili.io/H8Y7GQ1.webp',
  'https://iili.io/H8Y7Opp.webp',
  'https://iili.io/H8Y7UCX.webp',
  'https://iili.io/H8Y7VCF.webp',
  'https://iili.io/H8Y7X4a.webp',
  'https://iili.io/H8Y7ckQ.webp',
  'https://iili.io/H8Y7gGn.webp',
  'https://iili.io/H8Y7j3J.webp',
]

function Home() {

  return (
    <main>
      <section className={styles.header} style={{ backgroundImage: `url(${headerBackgroundImage})` }}>
        <div className={styles['header-content-wrapper']}>
          <div className={styles['header-content']}>
            <h2>Because the best days start with a</h2>
            <h1>CUPPA JOE</h1>
            <h3>Start your morning right with our catalog of artisanal coffee beans from around the world! </h3>
          </div>
        </div>
      </section>
      <section className={styles['product-preview']}>
        <h2>Check out some of our products!</h2>
        <InfiniteCarousel images={images} />
      </section>
      <section className={styles.blog}>
        <h2>Posts from our community</h2>
        <div className={styles['posts-wrapper']}>
          <Post
            title={'Where Our Beans Come From'}
            subtitle={'Sustainability'}
            imageUrl={coffeeOriginImage}
            imageDescription={''}
          >
            Learn how choosing ethically sourced beans not only supports the environment and local farmers but also enhances the quality and flavor of your daily brew.
          </Post>
          <Post
            title={"Light to Dark Roast - What's the Difference"}
            subtitle={'Educational'}
            imageUrl={coffeeRoastImage}
            imageDescription={''}
          >
            From the bright, acidic notes of a light roast to the bold, robust flavors of a dark roast, understanding these distinctions will help you find your perfect cup.
          </Post>
          <Post
            title={'How to Make the Perfect Cup of Coffee'}
            subtitle={'Tutorial'}
            imageUrl={coffeeBrewImage}
            imageDescription={''}
          >
            Whether you're a novice or a seasoned barista, these tips and techniques will help you achieve a rich, flavorful brew every time, ensuring your mornings start on the right note.
          </Post>
        </div>
      </section>
      <footer>

      </footer>
    </main>
  )
}

export default Home;