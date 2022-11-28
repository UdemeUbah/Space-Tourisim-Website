import React from "react";
import Button from "../../Button";
import Wrapper from "../../Wrapper";
import styles from "./destination.module.css";

const DestinationItems = ({ destination, button, btnFilter }) => {
  return (
    <Wrapper>
      {destination.length > 0 ? ( 
        destination.map((item) => {
          return (
            <main key={item.name}>
              <div className={styles.left}>
                <div className={styles.image}>
                  <img
                    src={item.images.png}
                    alt="destination-pics"
                    width="100%"
                  />
                </div>
              </div>
              <aside className={styles.right}>
                <nav>
                  <Button button={button} filter={btnFilter} />
                </nav>
                <div className={styles.text}>
                  <h1>{item.name}</h1>
                  <p>{item.description}</p>
                  <div className={styles.bottom}>
                    <div>
                      <span>avg distance</span>
                      <p>{item.distance}</p>
                    </div>
                    <div>
                      <span>est. travel time</span>
                      <p>{item.travel}</p>
                    </div>
                  </div>
                </div>
              </aside>
            </main>
          );
        })
      ) : (
        <main key={destination.name}>
          <div className={styles.left}>
            <div className={styles.image}>
              <img
                src={destination.images.png}
                alt="destination-pics"
                width="100%"
              />
            </div>
          </div>
          <aside className={styles.right}>
            <nav>
              <Button button={button} filter={btnFilter} />
            </nav>
            <div className={styles.text}>
              <h1>{destination.name}</h1>
              <p>{destination.description}</p>
              <div className={styles.bottom}>
                <div>
                  <span>avg distance</span>
                  <p>{destination.distance}</p>
                </div>
                <div>
                  <span>est. travel time</span>
                  <p>{destination.travel}</p>
                </div>
              </div>
            </div>
          </aside>
        </main>
      )}
    </Wrapper>
  );
};
//If the incoming array of destinations is greater than 0, map over that array, if it is less than zero, don't execute the map function

export default DestinationItems;
