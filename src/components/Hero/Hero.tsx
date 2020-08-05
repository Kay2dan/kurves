import React from 'react';
import "../../styles/hero.scss";

export default () => {
  return (
    <section className="hero is-fullheight-with-navbar">
      {/* <div className="hero-head"> */}
      {/* </div> */}
      <img src="/hero_img.jpg" alt="an image hinting at the wonders of yoga" />
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Yoga to balance your life</h1>
          <h2 className="subtitle">Transform your life</h2>
        </div>
      </div>
    </section>
  );
};
