import Login from "./page/Login";
import Navbar from "./Components/Navbar";
import Register from "./page/Register";
import Orderlist from "./page/Admin/OrderList";
import ProductsList from "./page/Admin/ProductsList";
import UserList from "./page/Admin/UserList";
import AddProduct from "./page/Admin/AddProduct";
import Products from "./page/Products";
import Cart from "./page/Cart";
import Home from "./page/Home";
import EditProduct from "./page/Admin/EditProduct";
import { Footer } from "./Components/Footer";
import ProductSinglePage from "./page/ProductSinglePage";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      {/* <Login /> */}
      {/* <Register /> */}

      {/* <Orderlist /> */}
      {/* <ProductsList /> */}
      {/* <UserList /> */}
      {/* <AddProduct /> */}
      {/* <EditProduct /> */}

      {/* <Products /> */}
      {/* <Cart /> */}
      <ProductSinglePage />
      {/* <Footer /> */}
    </>
  );
}

export default App;
