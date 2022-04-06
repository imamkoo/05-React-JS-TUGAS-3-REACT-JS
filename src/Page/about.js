import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tentang:
        "Warung Nusantara Adalah Restoran Yang Bernuansa Makanan Nusantara, Kami Ada Untuk Membuat Anda Menikmati Makanan Khas Dari Nusantara",
    };
  }
  render() {
    return (
      <div>
        <center>
          <p>ABOUT</p>
          {this.state.tentang}
        </center>
      </div>
    );
  }
}

export default Home;
