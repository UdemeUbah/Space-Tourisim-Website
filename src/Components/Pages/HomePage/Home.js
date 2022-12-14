import React from 'react'
import Wrapper from '../../Wrapper'
import styles from './home.module.css'
import Navbar from '../../NavBar/Navbar'

const Home = () => {
  return (
    <Wrapper >
      <Navbar />
      <main className={styles.main}>
          <section>
          <div className={styles.text}>
            <header>So, you want to travel to</header>
            <h1>SPACE</h1>
            <p>Lets face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give tou a truly out of this world experience!</p>
          </div>
          <div className={styles.explore}>
            <h1>EXPLORE</h1>
          </div>
        </section>
      </main>
    </Wrapper>
  )
}

export default Home