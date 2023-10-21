import "../component/styles/footer.css";
import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-text">
        <p> &copy; 2023 by Aminat | All Rights Reserved.</p>
      </div>
      <div className="footer-iconTop">
        <Link to="/">
          <FaArrowUp size={20} style={{ color: "var(--second-bg-color)" }} />
        </Link>
      </div>
    </footer>
  );
};
