import React from "react";
import { Carousel } from "antd";
import imgSlider1 from "../../../statics/slider/轮播图1.jpg";

const Sliders = () => {
  return (
    <div>
      <Carousel autoplay>
        <div>
          <img src={imgSlider1} alt="" />
        </div>

        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
      </Carousel>
    </div>
  );
};

export default Sliders;
