import "./navbar.scss";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { setFormData, setUser } from "../../redux/meditation";
import { getAuth, signOut } from "firebase/auth";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export default function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.meditation.user);
  const { photoURL, displayName } = user;

  //first letter of nickname
  const [initials, setInitials] = useState("");
  //keep track of whether the propic div is being hovered or not
  const [isHovered, setIsHovered] = useState(false);

  //display propic if exist in the google account or the name's firstletter
  let bgImg = null;
  if (photoURL) {
    bgImg = photoURL;
  }

  useEffect(() => {
    //show the name's first letter instead of photo
    if (user && !photoURL && displayName !== "") {
      const firstLetter = displayName.slice(0, 1);
      setInitials(firstLetter);
    }
  }, []);

  //LOGOUT
  const auth = getAuth();
  function logout() {
    signOut(auth)
      .then(() => {
        sessionStorage.clear(); // Clear session storage
        navigate("/login");
        dispatch(setUser({}));
        dispatch(setFormData({}));
      })
      .catch(() => {
        alert("Failed to logout. Please try again.");
      });
  }

  return (
    <div className="navbar">
      <Link to="/">
        <img
          src="/src/assets/logo/logo_icon_b.svg"
          alt="blue logo icon"
          className="nav-logo"
        />
      </Link>
      <div className="leftNav">
        <Link to="/blog">
          <p>BLOG</p>
        </Link>
        <div
          className="propic"
          style={{ backgroundImage: `url("${bgImg}")` }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* show first letter of nickname if there's no propic */}
          {initials && <p className="userNick">{initials}</p>}

          {/* show logout icon when propic div is hovered */}
          {isHovered && (
            <LogoutOutlinedIcon className="logoutIcon" onClick={logout} />
          )}
        </div>
      </div>
    </div>
  );
}
