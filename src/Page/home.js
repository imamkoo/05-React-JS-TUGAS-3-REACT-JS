import React, { Component } from "react";
import MenuUtama from "../ListData/ListMenuUtama";

class Home extends Component {
  render() {
    return (
      <div>
        <MenuUtama linkgambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/food1.jpg" />
      </div>
    );
  }
}

export default Home;
