import { React, useEffect, useState } from "react";
import { Route, Routes , Link} from "react-router-dom";
import "./App.css";
import axios from "axios";
import Cookies from "js-cookie";
import Login from "../src/Component/login/Login.jsx"
import Register from "../src/Component/register/Register.jsx";
import Product from "../src/Component/allProduct/Product.jsx";
import AdminDashBoard from "./Component/adminDashBoard/AdminDashBoard.jsx";
import AddProduct from "./Component/Addproduct/AddProduct.jsx";
import AboutUs from "./Component/Addproduct/AboutUs.jsx";
import WishList from "./Component/allProduct/WishList.jsx";


const App = () => {
  const [item, setItem] = useState([]);
  const [update, setUpdate] = useState(false);
  const fetch = () => {
    axios
      .get("http://localhost:3001/api/user/get")
      .then((response) => {
        console.log("succes", response.data);
        setItem(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const addUser = (image, firstName, lastName, email, password,role) => {
    axios
      .post("http://localhost:3001/api/user/rejister", {
        image,
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      
        role:role
      })
      .then(() => {
        setUpdate(!update);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const logIn = (email,password) => {
    axios
      .post("http://localhost:3001/api/user/logIn", {
        email: email,
        password: password,
      })
      .then((response) => {
        setUpdate(!update);
        console.log("hhh", response.data);
        Cookies.set("registeredUser", response.data.email);
      })
      .catch((err) => {
        console.log(err);
      });
  };
 
  useEffect(() => fetch(), [update]);
  
  return (
    <div >
       <nav   className="nav">
        <ul >
          
            <Link  className="nav" to="/Login">Login</Link>
          
          
            <Link   className="nav"to="/Register">Register</Link>
          
          
            <Link  className="nav" to="/Product">Product</Link>

          
          
            <Link className="nav" to="/AddProduct">AddProduct</Link>
          
            <Link   className="nav" to="/Admin">Admin</Link>
            <Link   className="nav" to="/AboutUs">AboutUs</Link>
            <Link   className="nav" to="/WishList">WishList</Link>
        
        </ul>
      </nav>
      <Routes>
        
        <Route path="/Login" element={<Login el={logIn} />} />
        <Route path="/Register" element={<Register addUser={addUser} />} />
        <Route path="/Product" element={<Product item={item} />} />
        <Route path="/Admin" element= {<AdminDashBoard/>} />
        <Route path="/AddProduct" element= {<AddProduct/>} />
        <Route path="/AboutUs" element= {<AboutUs/>} />
        <Route path="/WishList" element= {<WishList/>} />
      </Routes>
      
    </div>
  );
};

export default App;
