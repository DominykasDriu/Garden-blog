import React from "react";
import Button from "../Button";

export default function Hero() {
  return (
    <section className="hero_wrapper">
      <div className="hero">
        <div className="hero_text">
          <h1 className="hero_text__heading">
            Best gardening tips you will ever find.
          </h1>
          <p className="hero_text__paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            quibusdam aliquam autem laboriosam repellendus iste error tempora
            exercitationem delectus nostrum consectetur soluta voluptatibus,
            porro facere non, in earum unde sed?
          </p>
          <Button name='Blog' route='/blog'/>
        </div>
        <img src="./hero-image.jpeg" alt="garden" className='hero_image'/>
      </div>
    </section>
  );
}
