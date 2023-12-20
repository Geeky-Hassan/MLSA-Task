/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/mlsa pic3.jpg";

const imageAltText = "laptop on desk";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Simple Address Book in C++",
    description:
      "The Project consists of programming a C++ implementation of a Program that is a simple console-based application that allows the user to manage an address book.",
    url: "https://github.com/Geeky-Hassan/Simple_Address_Book_CPP",
  },
  {
    title: "Hangman Game in C++",
    description:
      "This repo is all about hangman game in c++. This is the part of a final project in our college.",
    url: "https://github.com/Geeky-Hassan/hangman",
  },
  {
    title: "Python Basics",
    description:
      "This repo is all about python basics. This is the part of a final project in our college.",
    url: "https://github.com/Geeky-Hassan/Python-basics",
  },
  {
    title: "Shared Expense Management System in C++",
    description:
      "The project consists of programming a C++ implementation of an application that split the expenses of multiple users.",
    url: "https://github.com/Geeky-Hassan/Shared_Expense_Management_System_c-",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
