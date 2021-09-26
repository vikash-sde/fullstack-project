import React from "react";
import { NavLink } from "react-router-dom";
import signup from "../images/signup.svg";

const Signup = () => {
  return (
    <>
      <div class="container mt-5 mb-5 d-flex justify-content-center">
        <div class="card px-1 py-4">
          <div class="card-body">
            <h3 class="information mt-4 text-center">Sign up</h3>
            <div class="row mt-4">
              <div class="col-sm-12">
                <div class="form-group">
                  <input
                    class="form-control"
                    type="text"
                    name="name"
                    placeholder="Name"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <div class="form-group">
                  <input
                    class="form-control"
                    type="text"
                    name="email"
                    placeholder="Email"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <div class="form-group">
                  <input
                    class="form-control"
                    type="text"
                    name="phone"
                    placeholder="Phone No."
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <div class="form-group">
                  <input
                    class="form-control"
                    type="text"
                    name="work"
                    placeholder="Work"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <div class="form-group">
                  <div class="input-group">
                    <input
                      class="form-control"
                      type="password"
                      name="password"
                      placeholder="Password"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <div class="form-group">
                  <div class="input-group">
                    <input
                      class="form-control"
                      type="cpassword"
                      name="cpassword"
                      placeholder="Confirm Password"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class=" d-flex flex-column text-center px-5 mt-3 mb-3">
              <small class="agree-text">
                By Booking this appointment you agree to the
              </small>
              <a href="#" class="terms">
                Terms & Conditions
              </a>
            </div>
            <button
              class="btn btn-primary btn-block confirm-button"
              type="submit"
            >
              Register Now
            </button>
            <div class=" d-flex flex-column text-center px-5 mt-3 mb-3">
              <small class="agree-text">
                Already have an account?
                <span>
                  <NavLink to="/signin" class="terms">
                    Login
                  </NavLink>
                </span>
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
