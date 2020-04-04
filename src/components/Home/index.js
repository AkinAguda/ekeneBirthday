import React, { useEffect, useState } from "react";
import Particles from "react-particles-js";
import Classes from "./Home.module.css";
import Message from "../Message";
import { ReactComponent as Loader } from "./svgs/ripple.svg";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.REACT_APP_API_URL}/formResponses1`)
      .then(response => response.json())
      .then(data => {
        setData(data.formResponses1);
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
        console.error(error);
      });
  }, []);
  return (
    <div className={Classes.container}>
      <div className={Classes.background}>
        <Particles className={Classes.particles} />
      </div>
      <h1 className={Classes.intro}>Happy Birthday Ekene!</h1>
      <p className={Classes.caption}>Here's what we have to say!</p>
      <section className={Classes.card}>
        {!loading ? (
          data.map(item => (
            <Message
              key={item.id}
              name={item.yourName}
              rel={item["yourRelationshipWithEkene (eGEkene'sFriend)"]}
              message={item.somethingNiceAboutHim}
            />
          ))
        ) : (
          <div className={Classes.loader}>
            <Loader />
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
