import React, { Component } from "react";
import styles from "./BaiTapThuKinh.module.css";
import GlassesList from "./GlassesList";

let arrGlasses = [
  {
    id: 1,
    price: 30,
    name: "GUCCI G8850U",
    url: "./glassesImage/v1.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 2,
    price: 50,
    name: "GUCCI G8759H",
    url: "./glassesImage/v2.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 3,
    price: 30,
    name: "DIOR D6700HQ",
    url: "./glassesImage/v3.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 4,
    price: 70,
    name: "DIOR D6005U",
    url: "./glassesImage/v4.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 5,
    price: 40,
    name: "PRADA P8750",
    url: "./glassesImage/v5.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 6,
    price: 60,
    name: "PRADA P9700",
    url: "./glassesImage/v6.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 7,
    price: 80,
    name: "FENDI F8750",
    url: "./glassesImage/v7.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 8,
    price: 100,
    name: "FENDI F8500",
    url: "./glassesImage/v8.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 9,
    price: 60,
    name: "FENDI F4300",
    url: "./glassesImage/v9.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
];

export default class BaiTapThuKinh extends Component {
  state = {
    glasses: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };

  changeGlasses = (glasses) => {
    this.setState({
      glasses: {
        id: glasses.id,
        price: glasses.price,
        name: glasses.name,
        url: glasses.url,
        desc: glasses.desc,
      },
    });
  };
  render() {
    return (
      <div className={"container-fluid p-0 m-0"}>
        <div className={`text-center p-5 text-white bg-dark ${styles.header}`}>
          <h3>TRY GLASSES APP ONLINE</h3>
        </div>
        <div className="row col-6 ml-auto mr-auto mt-5">
          <div className="col-5  ">
            <div className={`card`}>
              <img
                className="card-img-top"
                src="./glassesImage/model.jpg"
                width={`100%`}
              />

              <img
                src={this.state.glasses.url}
                className={`${styles.card__glasses__overlay_img} ${styles.card__glasses__overlay}`}
              />

              <div className={`${styles.card_img__overlay}`}>
                <p className={`${styles.card__title} p-0 m-0`}>
                  {this.state.glasses.name}
                </p>
                <p className={`${styles.card__text} p-0 m-0`}>
                  Price: {this.state.glasses.price}$
                </p>
                <p className={`${styles.card__text} p-0 m-0`}>
                  {this.state.glasses.desc}
                </p>
              </div>
            </div>
          </div>
          <div className="col-5 ml-auto">
            <div className={`card`}>
              <img
                className="card-img-top"
                src="./glassesImage/model.jpg"
                width={`100%`}
              />
            </div>
          </div>
        </div>

        <div className="container mt-5 p-5" style={{ backgroundColor: "white" }}>
          <GlassesList
            glassesList={arrGlasses}
            changeGlasses={this.changeGlasses}
          />
        </div>
      </div>
    );
  }
}
