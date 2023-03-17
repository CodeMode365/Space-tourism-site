import React, { useState, useEffect } from "react";
import "./Technology.scss";
import "../Reusable.scss";
import Data from "../data.json";

interface iData {
  name: string;
  images: {
    portrait: string;
    landscape: string;
  };
  description: string;
}

const techData: iData[] = Data["technology"];

const Technology = () => {
  const [currentTechInd, setCurrentTechInd] = useState<number>(0);
  const [currentTech, setCurrentTech] = useState<iData>(
    techData[currentTechInd]
  );

  useEffect(() => {
    setCurrentTech(techData[currentTechInd]);
  }, [currentTechInd]);

  return (
    <main id="tech-container">
      <div className="wrapper">
        <div className="container  md:px-48 t-c1">
          <div className="tech-title heading-5 md:-translate-y-48">
            03 space launch 101
          </div>
          <div className="other-info">
            <div className="options">
              {[...techData].map((data, ind) => (
                <div
                  className={`option ${
                    currentTechInd == ind ? "active-tech" : ""
                  }`}
                  key={data.name + ind}
                  onClick={() => setCurrentTechInd(ind)}
                >
                  {ind + 1}
                </div>
              ))}
            </div>
            <div className="contents">
              <div className="sub-heading-2 content-title">
                the technology...
              </div>
              <div className="heading-2">{currentTech.name}</div>
              <div className="body-text">{currentTech.description}</div>
            </div>
          </div>
        </div>
        <div className="container t-c2">
          <div className="hero-img">
            <img src={currentTech.images.landscape} alt={currentTech.name} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Technology;
