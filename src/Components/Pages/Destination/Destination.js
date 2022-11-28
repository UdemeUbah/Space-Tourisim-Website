import React, { useState } from "react";
import styles from "./destination.module.css";
import data from "../../data.json";
import Navbar from "../../NavBar/Navbar";
import DestinationItems from "./DestinationItems";

const DestinationData = data.destinations;

const AllTitles = [...DestinationData.map((data) => data.name)];

const Destination = () => {
  const [destinations, setDestinations] = useState(DestinationData);
  const [buttons, setButtons] = useState(AllTitles);

  const filter = (button) => {
    if (button === 'Moon') {
      setDestinations(DestinationData[0]);
      return;
    }
    const filteredData = DestinationData.filter(item => item.name === button);
    setDestinations(filteredData);
  };
  //The above function filters through the data gotten from the json file and creates a button component based on the names of each destination group and also sets the destinations based on the filtered data

  return (
    <div className={styles.container}>
      <Navbar />
      <h3>
        <span>01</span>pick your destination
      </h3>
      
      <DestinationItems
        destination={destinations}
        button={buttons}
        btnFilter={filter}
      />
    </div>
  );
};

export default Destination;
