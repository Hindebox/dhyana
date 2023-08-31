import "./ErrorPage.scss";
import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="error-page">
      <div className="error-message">
        <h2>Oops!</h2>
        <p>Sorry, an unexpected error has occurred.</p>
        <Link to="/login">
          <button>
            <HomeIcon />
          </button>
        </Link>
      </div>
    </div>
  );
}
