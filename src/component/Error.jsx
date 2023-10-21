import { useRouteError, Link } from "react-router-dom";
import "../component/styles/error.css";
export function Error() {
  const error = useRouteError();

  return (
    <div className="container">
      <h2>Page not Found</h2>
      <h4>Hmm, the page you were looking for doesn’t seem to exist anymore.</h4>
      <pre>
        {error.status} - {error.statusText}
      </pre>
      <Link to="/" className="error-btn btn">
        Home Page
      </Link>
    </div>
  );
}
