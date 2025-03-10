import React from "react";
import "./Hero.css";
import contentBoxes from "./assets/content-boxes.png";

const Hero = () => {
  return (
    <div className="hero-bg hover-blue">
      <div className="hero-wrapper hover-blue">
        <nav className="navbar hover-blue">
          <div className="logo hover-blue">G</div>

          <div className="nav-links hover-blue">
            <a href="#">Our vision</a>
            <a href="#">Projects</a>
            <a href="#">Life in Grow</a>
            <a href="#">Members</a>
            <a href="#">Get in touch</a>
          </div>

          <button className="pricing-btn hover-blue">Pricing</button>
        </nav>

        <div className="hero-section hover-blue">
          <div className="hero-left hover-blue">
            <h1>Just Creativity</h1>
            <h2 className="hero-left poppins-bold">Makes the Eyes Rise</h2>
          </div>
        </div>

        <div className="hero-right hover-blue">
          <p className="paragraph-text hover-blue">
            <strong>In publishing</strong> and graphic design, Lorem ipsum is a
            placeholder text <strong>commonly</strong> used to demonstrate the
            visual form of a document.
          </p>
          <div className="artboards-container hover-blue">
            <div className="artboards hover-blue">
              <h2>1K+</h2>
              <p>ARTBOARDS</p>
            </div>
          </div>
        </div>
      </div>

      <div className="content-boxes hover-blue">
        <p className="content-description hover-blue">
          <strong>In publishing</strong> and graphic design, Lorem ipsum <br />
          is a placeholder text <strong>commonly</strong> used to <br />{" "}
          demonstrate the visual form of a document.
        </p>
        <div className="small-rectangle hover-blue"></div>
        <img
          src={contentBoxes}
          alt="Content Boxes"
          className="content-image hover-blue"
        />
      </div>

      <div className="pro-choice-container hover-blue">
        <p className="pro-choice hover-blue">
          PRO'S <br /> CHOICE
        </p>

        <div className="absolute left-[55%] top-[116%] w-[100px] h-[100px] hover-blue">
          <div
            className="absolute w-[80px] h-[80px] bg-gradient-to-br from-blue-500 to-purple-600 
          rounded-full clip-ellipse rotate-[-130deg] hover-blue"
          ></div>

          <div className="absolute w-[30px] h-[30px] bg-black clip-star left-6.5 top-6 hover-blue"></div>
        </div>

        <div className="brand-section hover-blue">
          <p className="brand bitel hover-blue">Bitel</p>
          <p className="brand kotil hover-blue">KOTIL</p>
          <p className="brand miner hover-blue">MINER</p>
        </div>

        <div className="stats-section hover-blue">
          <div className="stat hover-blue">
            <p className="stat-number-text hover-blue">+15</p>
            <p className="stat-label-text hover-blue">Projects</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
