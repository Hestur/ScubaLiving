import React from "react";
import ListItem from "./ListItem";

class UlList extends React.Component {
  render() {
    return (
      <ul className="ul">
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </ul>
    );
  }
}

export default UlList;
