import React from 'react';
// import "../../styles/hero.scss";

export default () => {
  return (
    <section className="hero is-fullheight-with-navbar">
      <img src="/hero_img.jpg" alt="an image hinting at the wonders of yoga" />
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-2 is-spaced">Bring balance into your life</h1>
          <h2 className="subtitle is-5">
            Using yoga to help you with your health,
            whether its mental or physical.
          </h2>
        </div>
      </div>
    </section>
  );
};
