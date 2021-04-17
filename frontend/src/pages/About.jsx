import React from "react";
import Button from "../components/Button";

export default function About() {
  return (
    <div className="about-wrapper">
      <main className="about">
      <img className="about_image" src="./about-image.jpeg" alt="garden" />
      <div className="about_text">
        <h1 className="about_text__heading">I'm a gardner.</h1>
        <p className="about_text__paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          repellat fugiat voluptatum magni ullam dolorem? Nobis, rerum aperiam,
          consequatur dolor expedita.
        </p>
        <p className="about_text__paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          repellat fugiat voluptatum magni ullam dolorem? Nobis, rerum aperiam,
          consequatur dolor expedita, quis eius praesentium minus pariatur enim
          excepturi? Recusandae, in.
        </p>
        <p className="about_text__paragraph">
          Nobis, rerum aperiam, consequatur dolor expedita, quis eius
          praesentium minus pariatur enim excepturi? Recusandae, in.
        </p>
        <Button name='Contact me' route='contact'/>
      </div>
    </main>
    </div>
  );
}
