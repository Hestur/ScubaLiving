import React from "react";
import HeaderLogoImg from "./HeaderLogoImg";
import Nav from "./Nav";
import SearchBar from "./SearchBar";
import LoginBtn from "./LoginBtn";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <section className="logo">
          <HeaderLogoImg />
        </section>
        <Nav />
        <SearchBar />
        <img
          id="imglock"
          src="img/lock-icon-300x300.png"
          alt
          className="imglockinlogo"
        />
        <LoginBtn />
      </header>
    );
  }
}

export default Header;
