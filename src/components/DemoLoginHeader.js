import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth, provider } from "../firebase";
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from "../features/user/userSlice";

const DemoLoginHeader = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

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

  return (
    <Nav>
      <Link to={`/home`} style={{ paddingTop: 10, textDecoration: "none" }}>
        <Logo src="/images/AXD.png" />
      </Link>
      <Link to={`/home`} style={{ textDecoration: "none" }}>
        <Login>DEMO</Login>
      </Link>
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

export default DemoLoginHeader;
