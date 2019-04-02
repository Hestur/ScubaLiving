import React from "react";
import MainImg from "./MainImg";
import InfoBoxMain from "./InfoBoxMain";

class HomeSection extends React.Component {
  render() {
    return (
      <section id="home" className="home">
        <MainImg />
        <InfoBoxMain />
      </section>
    );
  }
}

export default HomeSection;
