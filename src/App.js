import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Page/About/About.jsx";
import AllParts from "./Page/AllParts/AllParts";
import Login from "./Page/Authentication/Login";
import Register from "./Page/Authentication/Register";
import RequireAdmin from "./Page/Authentication/RequireAdmin";
import RequireAuth from "./Page/Authentication/RequireAuth";
import Blogs from "./Page/Blogs/Blogs";
import Addproduct from "./Page/Dashboard/Addproduct";
import Dashboard from "./Page/Dashboard/Dashboard";
import MakeAdmin from "./Page/Dashboard/MakeAdmin";
import Manageorder from "./Page/Dashboard/Manageorder";
import Manageproduct from "./Page/Dashboard/Manageproduct";
import MyOrder from "./Page/Dashboard/MyOrder";
import Myprofile from "./Page/Dashboard/MyProfile/Myprofile";
import MyReview from "./Page/Dashboard/MyReview";
import Payment from "./Page/Dashboard/Payment";
import UpdateProfile from "./Page/Dashboard/UpdateProfile.js";
import Header from "./Page/Header/Header";
import Home from "./Page/Home/Home";
import Information from "./Page/Information/Information";
import Footer from "./Page/Shared/Footer/Footer.jsx";
import NotFound from "./Page/Shared/NotFound/NotFound.jsx";



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="Home" element={<Home></Home>}></Route>
        <Route path="about" element={<About></About>}></Route>
        <Route path="parts" element={<AllParts></AllParts>}></Route>
        <Route path="updateProfile" element={<UpdateProfile></UpdateProfile>}></Route>
        <Route
          path="product/:id"
          element={
            <RequireAuth>
              <Information></Information>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<Myprofile></Myprofile>}></Route>
          <Route path="order" element={<MyOrder></MyOrder>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
          <Route
            path="manageorder"
            element={
              <RequireAdmin>
                <Manageorder></Manageorder>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="addproduct"
            element={
              <RequireAdmin>
                <Addproduct></Addproduct>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageproduct"
            element={
              <RequireAdmin>
                <Manageproduct></Manageproduct>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="makeadmin"
            element={
              <RequireAdmin>
                <MakeAdmin></MakeAdmin>
              </RequireAdmin>
            }
          ></Route>
        </Route>
        <Route path="blogs" element={<Blogs></Blogs>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
