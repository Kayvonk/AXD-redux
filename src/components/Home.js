import { useEffect } from "react";
import styled from "styled-components";
import ImageSlider from "./ImageSlider";
import Movies from "./Movies";
import Viewers from "./Viewers";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";
import Recommend from "./Recommend";
import Action from "./Action";
import Comedy from "./Comedy";
import Sports from "./Sports";

const Home = (props) => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let action = [];
  let comedy = [];
  let sports = [];

  useEffect(() => {
    console.log("hello");
    db.collection("movies").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        console.log(recommends);
        switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;

          case "action":
            action = [...action, { id: doc.id, ...doc.data() }];
            break;

          case "comedy":
            comedy = [...comedy, { id: doc.id, ...doc.data() }];
            break;

          case "sports":
            sports = [...sports, { id: doc.id, ...doc.data() }];
            break;
        }
      });

      dispatch(
        setMovies({
          recommend: recommends,
          action: action,
          comedy: comedy,
          sports: sports,
        })
      );
    });
  }, [userName]);

  return (
    <div>
      <Container>
        <ImageSlider />
        <Viewers />
        <Recommend />
        <Action />
        <Comedy />
        <Sports />
      </Container>
    </div>
  );
};

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;

  &:before {
    background: url("/images/black-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;

export default Home;
