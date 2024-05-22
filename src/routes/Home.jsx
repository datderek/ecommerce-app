import styles from './Home.module.css';
import headerBackgroundImage from '../assets/coffee-farm.jpg';

function Home() {
  return (
    <main>
      <section className={styles.header} style={{ backgroundImage: `url(${headerBackgroundImage})`}}>
        <div className={styles['header-content-wrapper']}>
          <div className={styles['header-content']}>
            <h2>Because the best days start with a</h2>
            <h1>CUPPA JOE</h1>
            <h3>Start your morning right with our catalog of artisanal coffee beans from around the world! </h3>
          </div>
        </div>
      </section>
      <section className={styles['product-preview']}>

      </section>
      <section className={styles.blog}>

      </section>
      <footer>

      </footer>
    </main>
  )
}

export default Home;