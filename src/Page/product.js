import React, { Component } from "react";
import ListMakanan from "../ListData/ListMakanan";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pesan: 0,
    };
    this.rubahPesanan = this.rubahPesanan.bind(this);
    this.pesanan = this.pesanan.bind(this);
  }
  rubahPesanan() {
    this.setState((state, props) => {
      return {
        pesan: state.pesan++,
      };
    });
  }
  pesanan(e) {
    console.log(e.target.value);
  }

  render() {
    return (
      <div>
        <center>
          <h3>Daftar Makanan Yang Kami Sediakan : </h3>
          <td>
            <ListMakanan listGambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg" />
            <center>
              <button onClick={this.rubahPesanan}>Pesan Sekarang</button>
            </center>
          </td>
          <td>
            <ListMakanan listGambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png" />
            <center>
              <button onClick={this.rubahPesanan}>Pesan Sekarang</button>
            </center>
          </td>
          <td>
            <ListMakanan listGambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png" />
            <center>
              <button onClick={this.rubahPesanan}>Pesan Sekarang</button>
            </center>
          </td>
          <td>
            <ListMakanan listGambar="https://www.dbs.com/iwov-resources/images/newsroom/indonesia/Blog/masakan%20nusantara/nasi%20kentut.png" />
            <center>
              <button onClick={this.rubahPesanan}>Pesan Sekarang</button>
            </center>
          </td>
          <td>
            <ListMakanan listGambar="https://pesona.travel/media/nasi-kuning-sarapan-khas-nusantara-bermakna-mendalam_144651_1140.jpg" />
            <center>
              <button onClick={this.rubahPesanan}>Pesan Sekarang</button>
            </center>
          </td>
          <br />

          <input
            type="text"
            value="Masukkan Pesanan Anda"
            onChange={this.pesanan}
          />
          <h3>Pesanan Anda Adalah : {this.state.pesan}</h3>
        </center>
      </div>
    );
  }
}

export default Product;
