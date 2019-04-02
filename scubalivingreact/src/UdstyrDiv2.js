import React from "react";
import UdstyrImg2 from "./UdstyrImg2";
import UdstyrTextItem2 from "./UdstyrTextItem2";
import UdstyrPrisItem2 from "./UdstyrPrisItem2";

class UdstyrDiv2 extends React.Component {
  render() {
    return (
      <div id="img2div" className="udstyrdiv2">
        {" "}
        <UdstyrImg2 /> <UdstyrTextItem2 /> <br /> <UdstyrPrisItem2 /> <br />{" "}
      </div>
    );
  }
}

export default UdstyrDiv2;
