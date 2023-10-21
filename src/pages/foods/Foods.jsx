import { Link, useSearchParams, useLoaderData } from "react-router-dom";
import { getFoods } from "../../api";
import "../styles/foods.css";
export function loader() {
  return getFoods();
}

export function Foods() {
  const [searchParams, setSearchParams] = useSearchParams();
  const foods = useLoaderData();
  const categoryFilter = searchParams.get("category");

  const displayedFoods = categoryFilter
    ? foods.filter((food) => food.category === categoryFilter)
    : foods;
  const foodElements = displayedFoods.map((food) => (
    <div key={food.id} className="container">
      <Link
        to={food.id}
        state={{
          search: `?${searchParams.toString()}`,
          category: categoryFilter,
        }}
      >
        <div className="imageContainer">
          <img src={food.image} className="img" />
        </div>
        <div className="food-info">
          <h3>{food.name}</h3>
          <p>
            <span> ${food.price}</span>
            /day
          </p>
        </div>
        <i className={`food-category ${food.category} selected`}>
          {food.category}
        </i>
      </Link>
    </div>
  ));

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  return (
    <section className="food-list-container">
      <h1>Explore our foods options</h1>
      <div className="foods-list-filter-buttons">
        <button
          onClick={() => handleFilterChange("category", "Ice-Cream")}
          className={`food-category Ice-cream
                        ${categoryFilter === "Ice-cream" ? "selected" : ""}`}
        >
          Ice-cream
        </button>
        <button
          onClick={() => handleFilterChange("category", "Rice")}
          className={`food-category  Rice 
                        ${categoryFilter === "Rice" ? "selected" : ""}`}
        >
          Rice
        </button>
        <button
          onClick={() => handleFilterChange("category", "Burger")}
          className={`food-category  Burger 
                        ${categoryFilter === "Burger" ? "selected" : ""}`}
        >
          Burger
        </button>

        {categoryFilter ? (
          <button
            onClick={() => handleFilterChange("category", null)}
            className="food-category clear-filters"
          >
            Clear filter
          </button>
        ) : null}
      </div>
      <div className="food-list">{foodElements}</div>
    </section>
  );
}
