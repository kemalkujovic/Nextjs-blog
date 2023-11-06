import React from "react";
import classes from "./hero.module.css";
import Image from "next/image";
const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/0.png"
          alt="An image showing Kemal"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Kemal</h1>
      <p>
        I blog about web developmet - especially frontend frameworks like React.
      </p>
    </section>
  );
};

export default Hero;
