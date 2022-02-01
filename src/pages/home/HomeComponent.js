import React from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import "./Home.css";

function Home(props) {
  return (
    <div className="projects-main">
      <Header theme={props.theme} setTheme={props.setTheme} />
      <div className="basic-projects">
        <Greeting theme={props.theme} />
        <Skills theme={props.theme} />
        <Footer theme={props.theme} />
      </div>
    </div>
  );
}

export default Home;
