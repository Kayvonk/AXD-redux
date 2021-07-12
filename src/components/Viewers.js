import React from "react";
import styled from "styled-components";

export default function Viewers() {
  return (
    <Container>
      <Wrap>
        <img src="/images/studioghibli.png" />
        <div>
          <img src="images/anime-ghibli.jpg"></img>
        </div>
      </Wrap>
      <Wrap>
        <img src="/images/trigger.png" />
        <div>
          <img src="images/anime-trigger.jpg"></img>
        </div>
      </Wrap>
      <Wrap>
        <img src="/images/toei.png" />
        <div>
          <img src="images/anime-toei.jpg"></img>
        </div>
      </Wrap>
      <Wrap>
        <img src="/images/madhouse.png" />
        <div>
          <img src="images/anime-madhouse.jpg"></img>
        </div>
      </Wrap>
      <Wrap>
        <img src="/images/bones.png" />
        <div>
          <img src="images/anime-bones.jpg"></img>
        </div>
      </Wrap>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 30px;
  display: grid;
  padding: 30px 0px 26px 26px;
  grid-gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
`;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
  border-radius: 10px;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 /73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  position: relative;
  overflow: hidden;

  img {
    width: 90%;
    height: 100%;
    z-index: 1;
  }

  div {
    opacity: 0;
    transition: opacity 500ms ease-in-out 0s;
    img {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 0;
    }
  }

  &:hover {
    transform: scaleX() (1.05);
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 /72%) 0px 30px 22px -10px;

    div {
      opacity: 1;
    }
  }
`;

// const Overlay = styled.div`
//   position: relative;
//   img {
//     position: absolute;
//     height: 100%;
//     width: 100%;
//   }
// `;
