import React, { useState, useEffect } from "react";
import "./Destination.scss";
import "../Reusable.scss";
import Data from "../data.json";

interface iData {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  description: string;
  distance: string;
  travel: string;
}
const destinationData: iData[] = Data["destinations"];

const Destination: React.FC = (): JSX.Element => {
  const [currentDest, setCurrentDest] = useState<number>(0);
  const [currentData, setCurrentData] = useState<iData>(
    destinationData[currentDest]
  );

  useEffect(() => {
    setCurrentData(destinationData[currentDest]);
  }, [currentDest]);

  return (
    <main id="destination-container">
      <div className="wrapper ">
        <div className="container  md:px-48 d-c1">
          <div className="destination-title heading-5 ">
            01 Pick your destination
          </div>
          <div className="destination-image">
            <img src={currentData.images.webp} alt="destination" />
          </div>
        </div>
        <div className="container d-c2  md:px-48">
          <div className="options">
            <ul>
              {[
                ...destinationData.map((data, ind) => (
                  <li
                    key={data.name + ind}
                    onClick={() => setCurrentDest(ind)}
                    className={ind == currentDest ? "active-destination" : ""}
                  >
                    {data.name}
                  </li>
                )),
              ]}
            </ul>
          </div>
          <div className="heading-2">{currentData["name"]}</div>
          <div className="body-text mb-20">{currentData["description"]}</div>
          <hr className="break" />
          <div className="other-info">
            <div className="info-1 info">
              <div className="sub-heading-2">AVG. Distance</div>
              <div className="sub-heading-1">{currentData["distance"]}</div>
            </div>
            <div className="info-2 info">
              <div className="sub-heading-2">Est. travel time</div>
              <div className="sub-heading-1">{currentData["travel"]}</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Destination;
