import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

export default function ImageSlider() {
  let settings = {
    infinite: true,
    arrows: false,
    speed: 1000,
    draggable: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
  };

  return (
    <Carousel {...settings}>
      <Wrap>
        <img src="images/banner1.jpg"></img>
      </Wrap>
      <Wrap>
        <img src="/images/banner2.jpg"></img>
      </Wrap>
      <Wrap>
        <img src="images/banner3.jpg"></img>
      </Wrap>
    </Carousel>
  );
}

const Carousel = styled(Slider)`
  padding-top: 20px;

  ul li button {
    &:before {
      font-size: 10px;
      color: #d2d2d2;
    }
  }

  li.slick-active button:before {
    color: white;
  }

  button {
    z-index: 1;
  }
`;

const Wrap = styled.div`
  img {
    border: 4px solid transparent;
    border-radius: 4px;
    height: 100%;
    width: 100%;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 /73%) 0px 16px 10px -10px;
    transition-duration: 300ms;

    &:hover {
      border: 3px solid rgba(249, 249, 249, 0.8);
    }
  }
`;
