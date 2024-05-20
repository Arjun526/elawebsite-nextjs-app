import React from "react";
import "./joinNow.scss";
import Lottie from "lottie-react";
import arrow from "../../assets/ELA Assets/white marker arrow.json";
const JoinNow: React.FC = () => {
  return (
    <div id="join-main-section" className="container">
      <div className="row">
        <div className="card-inner">
          <div className="btn-main-section">
            <div className="col-md-8 col-lg-6">
              <div className="text-section">
                <div className="sign-up-text">
                  Sign up now to unlock endless learning opportunities
                </div>
                <div className="join-text">
                  Join a community of multi-dimensional learners
                </div>
              </div>
            </div>
            <div className="col-md-3 col-lg-3 d-none d-sm-block">
              <Lottie
                loop={true}
                animationData={arrow}
                style={{ height: "180px", width: "180px" }}
              />
            </div>
            <div className="col-md-3 col-lg-3 col-4">
              <button className="btn-join">JOIN NOW</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinNow;
