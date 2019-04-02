import React from "react";
import UdstyrImg4 from "./UdstyrImg4";
import UdstyrTextItem4 from "./UdstyrTextItem4";
import UdstyrPrisItem4 from "./UdstyrPrisItem4";

class UdstyrDiv4 extends React.Component {
  render() {
    return (
      <div id="img4div" className="udstyrdiv4">
        {" "}
        <UdstyrImg4 /> <UdstyrTextItem4 /> <br /> <UdstyrPrisItem4 /> <br />{" "}
      </div>
    );
  }
}

export default UdstyrDiv4;
