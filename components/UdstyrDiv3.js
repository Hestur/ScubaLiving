import React from "react";
import UdstyrImg3 from "./UdstyrImg3";
import UdstyrTextItem3 from "./UdstyrTextItem3";
import UdstyrPrisItem3 from "./UdstyrPrisItem3";

class UdstyrDiv3 extends React.Component {
  render() {
    return (
      <div id="img3div" className="udstyrdiv3">
        {" "}
        <UdstyrImg3 /> <UdstyrTextItem3 /> <br /> <UdstyrPrisItem3 /> <br />{" "}
      </div>
    );
  }
}

export default UdstyrDiv3;
