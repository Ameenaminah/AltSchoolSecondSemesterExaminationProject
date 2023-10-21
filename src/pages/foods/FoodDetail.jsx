import { Link, useLocation, useParams, useLoaderData } from "react-router-dom";
import { getFoods } from "../../api";
import "../styles/foods.css";
export function loader() {
  return getFoods();
}

export function FoodDetail() {
  const location = useLocation();
  const foods = useLoaderData();
   const { foodId } = useParams();
   const food = foods.find((item) => item.id === parseInt(foodId));
   console.log(food);

  const search = location.state?.search || "";
  const category = location.state?.category || "all";

  return (
    <div className="van-detail-container">
      <Link to={`..${search}`} relative="path" className="back-button">
        &larr; <span>Back to {category} section</span>
      </Link>

      <div className="van-detail">
        <img src={food.image} alt={food.name} />
        <i className={`van-type ${food.category} selected`}>{food.category}</i>
        <h2>{food.name}</h2>
        <p className="van-price">
          <span>${food.price}</span>/day
        </p>
        <p>{food.description}</p>
        <button className="link-button">Buy this food</button>
      </div>
    </div>
  );
}
