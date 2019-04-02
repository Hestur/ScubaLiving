import React from "react";
import InfoBoxRejser from "./InfoBoxRejser";
import InfoBox2 from "./InfoBox2";
import Rejse1 from "./Rejse1";
import Rejse2 from "./Rejse2";

class RejserSection extends React.Component {
  render() {
    return (
      <section id="rejser" className="rejser">
        <InfoBoxRejser />
        <InfoBox2 />
        <Rejse1 />
        <Rejse2 />
        <div id="linkrejse">
          {" "}
          <a href>Se flere destinationer og muligheder her...</a>{" "}
        </div>
      </section>
    );
  }
}

export default RejserSection;
