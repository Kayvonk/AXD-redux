import React from "react";
import styled from "styled-components";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import AddIcon from "@material-ui/icons/Add";
import GroupIcon from "@material-ui/icons/Group";

export default function Detail() {
  return (
    <Container>
      <Background>
        <img src="/images/backgrounds/background-Dororo.jpg" />
      </Background>
      <div style={{ fontSize: 90, fontFamily: "coolvetica", color: " white" }}>
        Dororo
      </div>
      <Controls>
        <PlayButton>
          <PlayArrowIcon className="nav-icon" style={{ color: "#222222" }} />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <PlayArrowIcon className="nav-icon" style={{ color: "#fff" }} />
          <span>TRAILER</span>
        </TrailerButton>
        <AddButton>
          <AddIcon className="nav-icon" style={{ color: "#fff" }} />
        </AddButton>
        <GroupWatchButton>
          <GroupIcon className="nav-icon" style={{ color: "#fff" }} />
        </GroupWatchButton>
      </Controls>
      <Description>
        Dororo, a young orphan thief, meets Hyakkimaru, a powerful ronin.
        Hyakkimaru's father, a greedy feudal lord, had made a pact with 12
        demons, offering his yet-unborn son's body parts in exchange for great
        power. Thus, Hyakkimaru - who was born without arms, legs, eyes, ears, a
        nose or a mouth - was abandoned in a river as a baby. Rescued and raised
        by Dr. Honma, who equips him with artificial limbs and teaches him
        sword-fighting techniques, Hyakkimaru discovers that each time he slays
        a demon, a piece of his body is restored. Now, he roams the war-torn
        countryside in search of demons.
      </Description>
    </Container>
  );
}

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
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
`;
