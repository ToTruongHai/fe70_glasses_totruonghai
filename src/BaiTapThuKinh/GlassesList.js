import React, { Component } from "react";
import GlassesItem from "./GlassesItem";

export default class GlassesList extends Component {
  renderGlassesList = () => {
    let { glassesList, changeGlasses } = this.props;
    return glassesList.map((glass, index) => {
      return (
        <div className="col-2 mt-3 mb-3" key={index}>
          <GlassesItem glass={glass} changeGlasses={changeGlasses} />
        </div>
      );
    });
  };
  render() {
    return (
      <div className="row">
        {this.renderGlassesList()}
      </div>
    );
  }
}
