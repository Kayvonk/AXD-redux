import { useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { auth, provider } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from "../features/user/userSlice";

export default function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUserName);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        history.push("/home");
      }
    });
  }, [userName]);

  const handleAuth = () => {
    if (!userName) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  return (
    <Container>
      <Content onClick={handleAuth}>
        <span>Sign Up</span>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &:before {
    background: url("/images/backgrounds/anime-background1.jpg") center center /
      cover no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;

const Content = styled.div`
  border-radius: 15px;
  display: flex;
  height: 50px;
  width: 20vw;
  justify-content: center;
  padding: 10px 0;
  align-items: center;
  background: hsl(204, 58.9%, 14.3%);
  border: none;
  cursor: pointer;

  &:hover {
    background: hsl(204, 58.9%, 24.3%);
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: 700;
  }
`;
