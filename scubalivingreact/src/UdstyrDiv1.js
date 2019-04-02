import React from "react";
import UdstyrImg1 from "./UdstyrImg1";
import UdstyrTextItem1 from "./UdstyrTextItem1";
import UdstyrPrisItem1 from "./UdstyrPrisItem1";

class UdstyrDiv1 extends React.Component {
  render() {
    return (
      <div id="img1div" className="udstyrdiv1">
        {" "}
        <UdstyrImg1 /> <UdstyrTextItem1 /> <br /> <UdstyrPrisItem1 /> <br />{" "}
      </div>
    );
  }
}

export default UdstyrDiv1;
