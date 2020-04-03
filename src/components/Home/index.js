import React from "react";
import Classes from "./Home.module.css";
import Message from "../Message";
// import { ReactComponent as CodeSvg } from "../svgs/coding.svg";

const Home = () => {
  return (
    <div className={Classes.container}>
      <h1 className={Classes.intro}>Hello Ekene</h1>
      <p className={Classes.caption}>
        Here's what people have to say about you!
      </p>
      <section className={Classes.card}>
        <Message
          name="Akin"
          rel="Ekene's Friend"
          message="Thanks for helping my life and career man you're a real life saver
        thanksss. "
        />
        <Message
          name="Akin"
          rel="Ekene's Friend"
          message="Thanks for helping my life and career man you're a real life saver
        thanksss."
        />
        <Message
          name="Akin"
          rel="Ekene's Friend"
          message="Thanks for helping my life and career man you're a real life saver
        thanksss."
        />
        <Message
          name="Akin"
          rel="Ekene's Friend"
          message="Thanks for helping my life and career man you're a real life saver
        thanksss."
        />
        <Message
          name="Akin"
          rel="Ekene's Friend"
          message="Thanks for helping my life and career man you're a real life saver
        thanksss."
        />
        <Message
          name="Akin"
          rel="Ekene's Friend"
          message="Thanks for helping my life and career man you're a real life saver
        thanksss."
        />
      </section>
    </div>
  );
};

export default Home;
