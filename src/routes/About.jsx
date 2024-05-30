import styles from './About.module.css';
import aboutUsImage from '../assets/about-us.jpg';
import missionImage from '../assets/our-mission.jpg';

function About() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1>Sustainably sourced and expertly roasted</h1>
      </div>
      <div className={styles.content}>
        <section className={styles['section']}>
          <div className={styles['section-image']}>
            <img src={aboutUsImage} alt='Joe examining coffee' />
          </div>
          <div className={styles['section-content']}>
            <h2>About Us</h2>
            <p>
              Cuppa Joe was born out of a passion for exceptional coffee and a
              desire to share that passion with the world. Our team has spent
              years traveling to coffee-growing regions, seeking out the best
              beans and learning the art of coffee cultivation.
            </p>
          </div>
        </section>
        <section className={styles['section']}>
          <div className={styles['section-content']}>
            <h2>Our Mission</h2>
            <p>
              We are committed to sustainability, ensuring that every bean we offer
              is grown and harvested with respect for the environment and the
              farmers who cultivate them. Our goal is to deliver an unparalleled
              coffee experience, from the rich aromas of freshly roasted beans to
              the perfect cup brewed in your home. Join us in our journey of
              building a community of passionate coffee enthusiasts who appreciate
              quality, sustainability, and the art of coffee.
            </p>
          </div>
          <div className={styles['section-image']}>
            <img src={missionImage} alt='Sustainable coffee plant' />
          </div>
        </section>
      </div>
    </main>
  )
}

export default About;