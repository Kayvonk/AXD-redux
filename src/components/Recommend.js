import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectRecommend } from "../features/movie/movieSlice";

const Recommend = (props) => {
  const movies = useSelector(selectRecommend);

  let settings = {
    arrows: true,
    draggable: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <Container>
        <h2> Recommended for You</h2>
        <Carousel {...settings}>
          {movies &&
            movies.map((movie, key) => (
              <Wrap key={key}>
                <Link to={`/detail/` + movie.id}>
                  <img src={movie.cardImg} alt={movie.title} />
                </Link>
              </Wrap>
            ))}
        </Carousel>
      </Container>
    </>
  );
};

const Container = styled.div`
  padding-bottom: 5rem;
  margin: 0 1rem;
  h2 {
    margin-top: 3rem;
  }
`;

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
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 5px;
  cursor: pointer;
  overflow: hidden;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 /73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  display: flex;
  flex-direction: column;

  @media (max-width: 360px) {
    height: 315px;
  }
  @media (min-width: 360px) {
    height: 315px;
  }
  @media (min-width: 425px) {
    height: 248px;
  }
  @media (min-width: 576px) {
    height: 345px;
  }
  @media (min-width: 992px) {
    height: 405px;
  }
  @media (min-width: 1200px) {
    height: 370px;
  }
  @media (min-width: 1400px) {
    height: 455px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scaleX() (1.05);
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 /72%) 0px 30px 22px -10px;
  }
`;

export default Recommend;
