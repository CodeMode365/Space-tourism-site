import React from "react";
import "./Home.scss";
import "../Reusable.scss";

const Home: React.FC = (): JSX.Element => {
  return (
    <main id="home-container">
      <div className="wrapper">
        <div className="container md:px-48">
          <p className="heading-5">So, you want to travel to </p>
          <h1 className="heading-1">Space</h1>
          <p className="body-text">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="container flex items-center justify-center">
          <div id="hero-img">Explore</div>
        </div>
      </div>
    </main>
  );
};

export default Home;
