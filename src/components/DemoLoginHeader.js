import { useState, useEffect } from "react";
import styled from "styled-components";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import StarIcon from "@material-ui/icons/Star";
import TheatersIcon from "@material-ui/icons/Theaters";
import TvIcon from "@material-ui/icons/Tv";
// import { useAuth } from "../Contexts/AuthContext";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { auth, provider } from "../firebase";
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from "../features/user/userSlice";

const DemoLoginHeader = (props) => {
  const defaultUserImage = "https://i.imgur.com/ScCwMk8.png";
  // const { currentUser } = useAuth();
  // const [loading, setLoading] = useState(false);
  // const history = useHistory();

  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  // useEffect(() => {
  //   auth.onAuthStateChanged(async (user) => {
  //     if (user) {
  //       setUser(user);
  //       history.push("/home");
  //     }
  //   });
  // }, [userName]);

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
    } else if (userName) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          history.push("/");
        })
        .catch((err) => alert(err.message));
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

  // const handleLogin = () => {
  //   try {
  //     setLoading(true);
  //     auth.signInWithPopup(provider);
  //   } catch {
  //     console.log("Falied to Login");
  //   }

  //   setLoading(false);
  // };

  // async function handleLogout() {
  //   try {
  //     await logout();
  //     history.push("/");
  //   } catch {
  //     console.log("Failed to logout");
  //   }

  return (
    <Nav>
      <Logo src="/images/AXD.png" />
      <Login onClick={handleAuth}>LOGIN</Login>
    </Nav>
  );
};

const Nav = styled.nav`
  height: 70px;
  background: #222222;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
`;

const Logo = styled.img`
  width: 60px;
`;

const DropdownLogo = styled(Logo)`
  width: 60px;
  position: relative;
  cursor: pointer;
`;

const NavWrap = styled.div`
  margin: 0;
  padding: 0.5rem 1rem;
  border-radius: 10px;

  &:hover {
    background-color: hsl(0, 0%, 23.3%);
  }
`;

const DropDownMenu = styled.div`
  position: absolute;
  top: 48px;
  left: 0px;
  background: rgb(34, 34, 34);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 200px;
  opacity: 0;

  ${NavWrap} {
    color: white;
  }
`;

const Menu = styled.div`
  position: relative;
  height: 60px;
  width: 60px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  color: #fff;

  ${DropdownLogo} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
  &:hover {
    ${DropDownMenu} {
      opacity: 1;
      transition-duration: 1s;
      z-index: 1;
    }
  }
`;

const NavMenu = styled.div`
  @media (max-width: 1200px) {
    display: none;
  }
  @media (min-width: 1200px) {
    display: flex;
    flex: 1;

    a {
      margin-left: 3rem;
      display: flex;
      align-items: center;
      padding: 0 12px;
      cursor: pointer;

      span {
        color: white;
        letter-spacing: 1.4px;
        position: relative;
        margin-left: 5px;

        &:after {
          content: "";
          background: #fff;
          height: 2px;
          position: absolute;
          left: 0;
          right: 0;
          bottom: -6px;
          opacity: 0;
          transform-origin: left center;
          transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
          transform: scaleX(0);
        }
      }

      &:hover {
        span:after {
          transform: scaleX(1);
          opacity: 1;
        }
      }
    }
  }
`;

const UserImg = styled.img`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  cursor: pointer;
`;

const Login = styled.a`
  background-color: hsl(0, 0%, 13.3%);
  cursor: pointer;
  color: #fff;
  padding: 8px 16px;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;
  &:hover {
    background-color: hsl(0, 0%, 23.3%);
  }
`;

const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
`;

const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  color: #fff;

  ${UserImg} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }

  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
      z-index: 1;
    }
  }
`;

export default DemoLoginHeader;
