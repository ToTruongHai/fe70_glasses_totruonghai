import React, { Component } from "react";
import styles from "./GlassesItem.module.css";

export default class GlassesItem extends Component {
  render() {
    let { glass, changeGlasses } = this.props;
    return (
      <img
        className={`${styles.imgGlasses}`}
        src={glass.url}
        onClick={() => {
          changeGlasses(glass);
        }}
      />
    );
  }
}
