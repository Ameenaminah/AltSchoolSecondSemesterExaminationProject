import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Layout, Error, MenuLayout } from "./component";
import { About, Blog, Contact, Home, Login, NotFound } from "./pages";
import {
  Foods,
  foodsLoader,
  FoodDetail,
  foodDetailLoader,
} from "./pages/foods";
import { Dashboard, Income, MenuFoods, Reviews } from "./pages/menu";

function App() {
  return (
    <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(
          <Route path="/" element={<Layout />} errorElement={<Error />}>
            <Route index element={<Home />} />
            <Route
              path="foods"
              element={<Foods />}
              errorElement={<Error />}
              loader={foodsLoader}
            />
            <Route
              path="foods/:id"
              element={<FoodDetail />}
              loader={foodDetailLoader}
            />
            <Route path="contact" element={<Contact />} />
            <Route path="blog" element={<Blog />} />
            <Route path="about" element={<About />} />
            <Route path="login" element={<Login />} />

            <Route path="menu" element={<MenuLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="foods" element={<MenuFoods />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        )
      )}
    />
  );
}

export default App;
