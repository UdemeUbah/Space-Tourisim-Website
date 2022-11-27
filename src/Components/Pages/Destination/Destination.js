import React from "react";
import styles from "./destination.module.css";
// import data from "../../../data.json";
import Moon from "../../assets/destination/image-moon.png";



// const pickDestination = data.destinations
const Destination = () => {
  return (
    <div className={styles.container}>
          <h3>
            <span>01</span>pick your destination
          </h3>
      <main>
        <div className={styles.left}>
          <div className={styles.image}>
            <img src={Moon} alt="moon" width='100%' />
          </div>
        </div>
        <aside className={styles.right}>
          <nav>
            <NEW />
          </nav>
          <div className={styles.text}>
            <h1>moon</h1>
            <p>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
            <div className={styles.bottom}>
              <div>
                <span>avg distance</span>
                <p>384,400 km</p>
              </div>
              <div>
                <span>est. travel time</span>
                <p>3 days</p>
              </div>
            </div>

          </div>
        </aside>
      </main>
    
    </div>
  );
};

export default Destination;
