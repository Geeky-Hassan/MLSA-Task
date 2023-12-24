/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/mlsa pic2.jpg";

const imageAltText = "Hustle and tech background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "An aspiring writer crafting horror stories and optimizing content who seeks to continuously expand my skillset as a CS student.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Content Writing",
  "Horror Stories Writing",
  "History enthusiast",
  "CS Student",
  "SEO enthusiast",
  // "Python",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "As an aspiring writer, I find joy in crafting horror stories that allow me to explore intriguing ideas while building suspense for readers. History has fascinated me too - it's compelling to learn how past events shaped our present. I'm currently a computer science student continuously working to expand my skills in coding, algorithms optimization, and beyond. I'm an ambitious lifelong learner seeking to improve both my technical and communication abilities each day";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
