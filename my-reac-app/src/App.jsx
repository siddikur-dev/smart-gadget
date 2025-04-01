import { Suspense } from "react";
import "./App.css";
import Electronics from "./Category/electronics";
import Nav from "./Body/Header/Nav";

function App() {
  // FetchApi
  const fetchApi = async () => {
    const res = await fetch(
      "https://fakestoreapi.com/products/category/electronics"
    );
    return res.json();
  };
  const fetchPromise = fetchApi();
  return (
    <>
      <Nav></Nav>
      <Suspense fallback={<h3>Eletronic Item Are Loadnig</h3>}>
        <Electronics fetchPromise={fetchPromise}></Electronics>
      </Suspense>
    </>
  );
}

export default App;
