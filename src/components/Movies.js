import React from "react";
import styled from "styled-components";

export default function Movies() {
  return (
    <>
      <Container>
        <h4> Recommended for You</h4>
        <Content>
          <Wrap>
            <img src="/images/thumbnails/Dororo.jpg" />
          </Wrap>
          <Wrap>
            <img src="/images/thumbnails/Steins;Gate.jpg" />
          </Wrap>
          <Wrap>
            <img src="/images/thumbnails/MushishiZokuShou2.jpg" />
          </Wrap>
          <Wrap>
            <img src="/images/thumbnails/Akira.jpg" />
          </Wrap>
          <Wrap>
            <img src="/images/thumbnails/CowboyBebop.png" />
          </Wrap>
        </Content>
      </Container>
      <Container>
        <h4>Action</h4>
        <Content>
          <Wrap>
            <img src="/images/thumbnails/Yuu☆Yuu☆Hakusho.png" />
          </Wrap>
          <Wrap>
            <img src="/images/thumbnails/Shingeki no Kyojin Gaiden Kuinaki Sentaku.png" />
          </Wrap>
          <Wrap>
            <img src="/images/thumbnails/FateZero.png" />
          </Wrap>
          <Wrap>
            <img src="/images/thumbnails/Naruto Shippuuden.png" />
          </Wrap>
          <Wrap>
            <img src="/images/thumbnails/Boku no Hero Academia 2.png" />
          </Wrap>
        </Content>
      </Container>
      <Container>
        <h4>Comedy</h4>
        <Content>
          <Wrap>
            <img src="/images/thumbnails/Hinamatsuri.jpg" />
          </Wrap>
          <Wrap>
            <img src="/images/thumbnails/Ansatsu Kyoushitsu 2.jpg" />
          </Wrap>
          <Wrap>
            <img src="/images/thumbnails/Chuunibyou demo Koi ga Shitai!.jpg" />
          </Wrap>
          <Wrap>
            <img src="/images/thumbnails/Saiki Kusuo no Ψ-nan.png" />
          </Wrap>
          <Wrap>
            <img src="/images/thumbnails/Kono Subarashii Sekai ni Shukufuku wo! Kurenai Densetsu.png" />
          </Wrap>
        </Content>
      </Container>
      <Container>
        <h4>Sports</h4>
        <Content>
          <Wrap>
            <img src="/images/thumbnails/Haikyuu!! Sainou to Sense.png" />
          </Wrap>
          <Wrap>
            <img src="/images/thumbnails/Kuroko no Basket Saikou no Present Desu.jpg" />
          </Wrap>
          <Wrap>
            <img src="/images/thumbnails/Slam Dunk.jpg" />
          </Wrap>
          <Wrap>
            <img src="/images/thumbnails/Yuri!!! on ICE.png" />
          </Wrap>
          <Wrap>
            <img src="/images/thumbnails/Megalo Box.jpg" />
          </Wrap>
        </Content>
      </Container>
    </>
  );
}

const Container = styled.div``;

const Content = styled.div`
  display: grid;
  padding-bottom: 30px;
  grid-gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
`;

const Column = styled(Content)`
  span {
    color: white;
    font-size: 16pt;
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
