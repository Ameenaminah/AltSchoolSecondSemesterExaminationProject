import { Link } from "react-router-dom";
import "./styles/home.css";
export const Home = () => {
  return (
    <>
      <section className="home" id="home">
        <div className="content">
          <h3>
            fresh <span>food in the </span>morning
          </h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
            labore, sint cupiditate distinctio tempora reiciendis.
          </p>
          <Link className="btn">Get yours now</Link>
        </div>
      </section>
    </>
  );
};
