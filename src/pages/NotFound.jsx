import { Link } from "react-router-dom";
import "../component/styles/error.css"

export function NotFound() {
  return (
    <section className="container">
      <h2>Page not Found</h2>
      <h4>Sorry, the page you were looking for was not found.</h4>
      <Link to="/" className="btn">
        Return to Home
      </Link>
    </section>
  );
}
