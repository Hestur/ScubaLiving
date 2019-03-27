import React from "react";
import HomeSection from "./HomeSection";
import UdstyrSection from "./UdstyrSection";

class Main extends React.Component {
  render() {
    return (
      <main className="main">
        <HomeSection />
        <UdstyrSection />
        <section id="rejser">
          <div className="infobox">
            <h2 className="rejsetext">Dyk ud i verden</h2>
          </div>
          <div className="infobox2" />
          <div id="rejs1">
            {" "}
            <img src="img/norge.JPG" alt />{" "}
            <div className="rejseinfo1">
              {" "}
              <a className="Capstxt">Norge</a> <br />
              Nordeuropas bedste dykkerspots ligger i Norge. Vi har 25 års
              erfaring med dyr i Norge. Oplev det klareste vand i verden!
              <br />{" "}
            </div>{" "}
          </div>
          <div id="rejs2">
            {" "}
            <img src="img/malta.jpg" alt />{" "}
            <div className="rejseinfo2">
              {" "}
              <a className="Capstxt">Malta</a> <br />
              Oplev skønne malta og det syge dyreliv og sammenhold. Vi
              arrangerer dykkerrejser til Malta hele året rundt.
              <br />{" "}
            </div>{" "}
          </div>
          <div id="linkrejse">
            {" "}
            <a href>Se flere destinationer og muligheder her...</a>{" "}
          </div>
        </section>
        <section id="kurser">
          <div className="infobox">
            <h2 className="kursustext">PADI - Dykkercertifikat</h2>
          </div>
          <div className="infobox2" />
          <img id="padi" src="img/PADI.SVG" alt />
          <div id="linkkursus">
            <a href>Se alle kurser og certifikater her...</a>
          </div>
        </section>
      </main>
    );
  }
}

export default Main;
