import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import AddIcon from "@material-ui/icons/Add";
import GroupIcon from "@material-ui/icons/Group";
import db from "../firebase";
import DemoDetailHeader from "./DemoDetailHeader";

export default function Detail() {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setDetailData(doc.data());
        } else {
          console.log("no such document in firebase 🔥");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, [id]);

  return (
    <>
      <DemoDetailHeader />
      <Container>
        <Wrap>
          <Background>
            <img alt={detailData.title} src={detailData.backgroundImg} />
            <Overlay />
          </Background>
          <HeaderBackground />
        </Wrap>
        <Title style={{ fontFamily: "coolvetica", color: " white" }}>
          {detailData.title}
        </Title>
        <Controls>
          <ControlWrap>
            <PlayButton>
              <PlayArrowIcon
                className="nav-icon"
                style={{ color: "#222222" }}
              />
              <span>PLAY</span>
            </PlayButton>
            <TrailerButton>
              <PlayArrowIcon className="nav-icon" style={{ color: "#fff" }} />
              <span>TRAILER</span>
            </TrailerButton>
          </ControlWrap>
          <ControlWrap2>
            <AddButton>
              <AddIcon className="nav-icon" style={{ color: "#fff" }} />
            </AddButton>
            <GroupWatchButton>
              <GroupIcon className="nav-icon" style={{ color: "#fff" }} />
            </GroupWatchButton>
          </ControlWrap2>
        </Controls>
        <Details>
          <SubTitle>{detailData.subTitle}</SubTitle>
          <SubTitle>{detailData.length}</SubTitle>
          <Description>{detailData.description}</Description>
          <Description>{detailData.description2}</Description>
          <Description>{detailData.description3}</Description>
        </Details>
      </Container>
    </>
  );
}

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;

const Details = styled.div`
  padding: 2rem 0;
`;

const Wrap = styled.div`
  position: relative;
`;

const ControlWrap = styled.div`
  @media (min-width: 576px) {
    display: flex;
  }
`;

const ControlWrap2 = styled.div`
  display: flex;
  @media (max-width: 576px) {
    padding-top: 2rem;
  }
`;

const Overlay = styled.div`
  @media (max-width: 576px) {
    background: linear-gradient(
      90deg,
      rgba(22, 22, 22, 1) 0%,
      rgba(22, 22, 22, 1) 40%,
      rgba(0, 0, 0, 0) 40%
    );
  }
  @media (min-width: 576px) {
    background: linear-gradient(
      90deg,
      rgba(22, 22, 22, 1) 0%,
      rgba(22, 22, 22, 1) 36%,
      rgba(0, 0, 0, 0) 36%
    );
  }
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
`;

const HeaderBackground = styled.div`
  background: linear-gradient(
    180deg,
    rgba(22, 22, 22, 1) 0%,
    rgba(22, 22, 22, 1) 8%,
    rgba(0, 0, 0, 0) 8%
  );
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 1;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -2;
  opacity: 1;

  img {
    margin-left: 25vw;
    margin-top: 50px;
    width: 90%;
    height: 100%;
    object-fit: cover;
  }
`;

const Controls = styled.div`
  align-items: center;
  @media (min-width: 576px) {
    display: flex;
  }
`;

const PlayButton = styled.div`
  border-radius: 4px;
  display: flex;
  width: fit-content;
  margin-right: 22px;
  padding: 5px 15px 5px 5px;
  align-items: center;
  background: rgb(249, 249, 249);
  border: none;
  cursor: pointer;

  &:hover {
    background: rgb(222, 222, 222);
  }

  span {
    font-weight: 700;
  }
`;

const TrailerButton = styled(PlayButton)`
  @media (max-width: 576px) {
    margin-top: 2rem;
  }
  background: rgb(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);

  &:hover {
    background: rgb(100, 100, 100, 0.3);
  }

  span {
    font-weight: 400;
    color: white;
  }
`;

const AddButton = styled.div`
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid rgb(249, 249, 249);
  border-radius: 50%;
  background: rgb(0, 0, 0, 0.3);
  margin-right: 16px;

  &:hover {
    background: rgb(100, 100, 100, 0.3);
  }
`;

const GroupWatchButton = styled(AddButton)`
  background: rgb(0, 0, 0, 0.6);
`;

const Description = styled.div`
  margin-top: 10px;
  color: rgb(249, 249, 249);
  font-size: 20px;
  font-weight: 600;
  width: 30vw;
  @media (max-width: 360px) {
    font-size: 7pt;
  }
  @media (min-width: 360px) {
    font-size: 7pt;
  }
  @media (min-width: 410px) {
    font-size: 7pt;
  }
  @media (min-width: 576px) {
    font-size: 9pt;
  }
  @media (min-width: 768px) {
    font-size: 11pt;
  }
  @media (min-width: 992px) {
    font-size: 13pt;
  }
  @media (min-width: 1200px) {
    font-size: 14pt;
  }
`;

const Title = styled.div`
  width: 40vw;
  padding-bottom: 2rem;

  @media (max-width: 360px) {
    font-size: 16pt;
  }
  @media (min-width: 360px) {
    font-size: 20pt;
  }
  @media (min-width: 410px) {
    font-size: 30pt;
  }
  @media (min-width: 576px) {
    font-size: 30pt;
  }
  @media (min-width: 768px) {
    font-size: 40pt;
  }
  @media (min-width: 992px) {
    font-size: 55pt;
  }
`;

const SubTitle = styled(Description)`
  @media (max-width: 360px) {
    font-size: 7pt;
  }
  @media (min-width: 360px) {
    font-size: 7pt;
  }
  @media (min-width: 410px) {
    font-size: 7pt;
  }
  @media (min-width: 576px) {
    font-size: 9pt;
  }
  @media (min-width: 768px) {
    font-size: 11pt;
  }
  @media (min-width: 992px) {
    font-size: 13pt;
  }
  @media (min-width: 1200px) {
    font-size: 14pt;
  }
`;
