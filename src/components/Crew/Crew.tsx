import React, { useState, useEffect } from "react";
import "./Crew.scss";
import "../Reusable.scss";
import Data from "../data.json";

interface iData {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  role: string;
  bio: string;
}

const crewData: iData[] = Data["crew"];

const Crew: React.FC = (): JSX.Element => {
  const [currentCrewInd, setCurrentCrewInd] = useState<number>(0);
  const [currentCrewData, setcurrentCrewData] = useState<iData>(
    crewData[currentCrewInd]
  );
  useEffect(() => {
    setcurrentCrewData(crewData[currentCrewInd]);
  }, [currentCrewInd]);

  return (
    <main id="crew-container">
      <div className="wrapper">
        <div className="container md:px-48 md:-translate-y-1/4">
          <div className="heading-5 -translate-y-32 crew-title">
            02 Meet your crew
          </div>
          <div className="infos ">
            <div className="info ">
              <div className="heading-4">{currentCrewData["role"]}</div>
              <div className="heading-2">{currentCrewData["name"]}</div>
              <div className="body-text">{currentCrewData["bio"]}</div>
            </div>
            <div className="options-box ">
              {[...crewData].map((crew, ind) => (
                <div
                  className={`circle ${
                    ind == currentCrewInd ? "active-crew" : ""
                  }`}
                  key={crew.name + ind}
                  onClick={() => setCurrentCrewInd(ind)}
                ></div>
              ))}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="hero-img">
            <img
              src={currentCrewData.images.webp}
              alt={currentCrewData.name}
              className=""
            />
            <hr />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Crew;
