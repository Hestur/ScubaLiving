import React from "react";
import InfoBoxKurser from "./InfoBoxKurser";
import InfoBox2 from "./InfoBox2";
import PADISVG from "./PADISVG";
import Linkkursus from "./Linkkursus";

class KurserSection extends React.Component {
  render() {
    return (
      <section id="kurser" className="kurser">
        <InfoBoxKurser />
        <InfoBox2 />
        <PADISVG />
        <Linkkursus />
      </section>
    );
  }
}

export default KurserSection;
