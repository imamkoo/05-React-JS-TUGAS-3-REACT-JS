import React, { Component } from "react";

class ListMakanan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: this.props.listGambar,
    };
  }
  render() {
    return <img src={this.state.dataList} alt="Product Makanan" width="150" />;
  }
}

export default ListMakanan;
