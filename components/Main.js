import React from "react";
import HomeSection from "./HomeSection";
import UdstyrSection from "./UdstyrSection";
import RejserSection from "./RejserSection";
import KurserSection from "./KurserSection";

class Main extends React.Component {
  render() {
    return (
      <main className="main">
        <HomeSection />
        {}
        <UdstyrSection />
        {}
        <RejserSection />
        {}
        <KurserSection />
      </main>
    );
  }
}

export default Main;
