// import React from 'react'
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">ABOUT US</h1>
            <p>Eat Till you Explode BOOM!</p>
          </div>
          <p className="mid">
            At our place, we believe food isn’t just fuel but it’s an experience!
            It’s about savoring every bite, every flavor, and every moment.
            Whether you are craving comfort food or adventurous eats, we serve up
            bold flavors, generous portions, and unforgettable meals. Come
            hungry, leave happy because here, food is life, and there’s always
            room for one more bite!!!
          </p>
          <Link to={"/"}>
            Explode Menu{""}
            <span>
              <HiOutlineArrowRight />
            </span>
          </Link>
        </div>
        <div className="banner">
          <img src="about.png" alt="about" />
        </div>
      </div>
    </section>
    </>
  );
};

export default About;
