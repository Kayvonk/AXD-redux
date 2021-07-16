import styled from "styled-components";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import StarIcon from "@material-ui/icons/Star";
import TheatersIcon from "@material-ui/icons/Theaters";
import TvIcon from "@material-ui/icons/Tv";
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

const DemoDetailHeader = (props) => {
  const defaultUserImage = "https://i.imgur.com/ScCwMk8.png";

  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  const handleAuth = () => {
    if (!userName) {
      history.push("/");
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

  return (
    <Nav>
      <>
        <Menu>
          <Link to={`/home`} style={{ paddingTop: 10, textDecoration: "none" }}>
            <DropdownLogo src="/images/AXD.png" />
          </Link>
          <DropDownMenu>
            <NavWrap className="nav-wrap">
              <Link to={`/home`} style={{ textDecoration: "none" }}>
                <h4>Home</h4>
              </Link>
            </NavWrap>
            <NavWrap className="nav-wrap">
              <Link to={`/home`} style={{ textDecoration: "none" }}>
                <h4>Search</h4>
              </Link>
            </NavWrap>
            <NavWrap className="nav-wrap">
              <Link to={`/home`} style={{ textDecoration: "none" }}>
                <h4>Watchlist</h4>
              </Link>
            </NavWrap>
            <NavWrap className="nav-wrap">
              <Link to={`/home`} style={{ textDecoration: "none" }}>
                <h4>Favorites</h4>
              </Link>
            </NavWrap>
            <NavWrap className="nav-wrap">
              <Link to={`/home`} style={{ textDecoration: "none" }}>
                <h4>Movies</h4>
              </Link>
            </NavWrap>
            <NavWrap className="nav-wrap">
              <Link to={`/home`} style={{ textDecoration: "none" }}>
                <h4>Series</h4>
              </Link>
            </NavWrap>
          </DropDownMenu>
        </Menu>
        <NavMenu>
          <Link to={`/home`} style={{ textDecoration: "none" }}>
            <HomeIcon className="nav-icon" style={{ color: "#fff" }} />
            <span className="nav-text"> HOME </span>
          </Link>
          <a>
            <SearchIcon className="nav-icon" style={{ color: "#fff" }} />
            <span className="nav-text"> SEARCH </span>
          </a>
          <a>
            <AddIcon className="nav-icon" style={{ color: "#fff" }} />
            <span className="nav-text"> WATCHLIST </span>
          </a>
          <a>
            <StarIcon className="nav-icon" style={{ color: "#fff" }} />
            <span className="nav-text"> FAVORITES </span>
          </a>
          <a>
            <TheatersIcon className="nav-icon" style={{ color: "#fff" }} />
            <span className="nav-text"> MOVIES </span>
          </a>
          <a>
            <TvIcon className="nav-icon" style={{ color: "#fff" }} />
            <span className="nav-text"> SERIES </span>
          </a>
        </NavMenu>
        <SignOut>
          <UserImg src={userPhoto ? userPhoto : defaultUserImage} />
          <DropDown>
            <span onClick={handleAuth}>Sign out</span>
          </DropDown>
        </SignOut>
      </>
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
  z-index: 1;
  width: 100%;
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
  padding: 5px;
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

export default DemoDetailHeader;
