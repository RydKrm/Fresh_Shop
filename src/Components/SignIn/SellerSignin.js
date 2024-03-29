import React, { useContext, useState } from "react";
import HeroSection from "../About/HeroSection";
import app from "../../fireBase/firebase.init";
import {
  getFirestore,
  getDoc,
  doc,
} from "@firebase/firestore";
import { userContext } from "../../App";
import {useNavigate } from "react-router-dom";
import { GetADoc } from "../../Context/FirebaseContext";

const SellerSignIn = () => {
  const [user, setUser] = useState({ userRole: "seller" });
  const db = getFirestore(app);
  const [checkUser, setCheckUser] = useContext(userContext);
  const navigate = useNavigate();

  const inputHandle = (event) => {
    setUser((value) => ({ ...value, [event.target.name]: event.target.value }));
  };

  const formHandle = async(event) => {
    event.preventDefault();
    const docRef = doc(db, "seller_info", user.email);
    try {
      getDoc(docRef)
        .then( async() => {
          console.log("User Exists");
          setCheckUser({ userRole: "seller" });
          const data = await GetADoc('seller_info',user.email);
          localStorage.setItem("fresh_shop", JSON.stringify(data));
         // navigate("/home");
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <span>
      <HeroSection></HeroSection>
      <div className="cart-box-main">
        <div className="container">
          <div className="row new-account-login">
            <div className="col-sm-12 col-lg-12 mb-3">
              <div className="title-left">
                <h3>Seller Login</h3>
              </div>
            

              <form className="mt-3 review-form-box" id="formLogin">
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="InputEmail" className="mb-0">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="InputEmail"
                      name="email"
                      onBlur={inputHandle}
                      placeholder="Enter Email"
                    />{" "}
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="InputPassword" className="mb-0">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      onBlur={inputHandle}
                      id="InputPassword"
                      placeholder="Password"
                    />{" "}
                  </div>
                </div>
                <button
                  type="submit"
                  onClick={formHandle}
                  className="btn hvr-hover btn-register" >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </span>
  );
};

export default SellerSignIn;
