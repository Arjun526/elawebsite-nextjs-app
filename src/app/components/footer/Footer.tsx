import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import imageicon from "./img/Group 77256.svg";
import "./footer.scss";
import Lottie from "lottie-react";
import rainbow from "../footer/img/Rainbow.json";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className=".container-fluid">
      <div id="outer-section-footer">
        <div className="footer-image">
          <div className="footer-text ">
            <div className="footer-inner-text test">
              <div className="icon">
                <Image src={imageicon} alt="icon" className="iamgeicon" />
              </div>
              <div className="text1">Reach out to us.</div>
              <div className="text2">Get your questions answered about</div>
              <div className="text3"> learning with ELA.</div>
            </div>
            <div className="footer-inner-text test1">
              <div className="text4">About Us</div>
              <div className="text5">Blog (Coming soon)</div>
            </div>
            <div className="footer-inner-text test2">
              <div className="text6">
                <Link
                  href="/terms-of-service"
                  className="links-text"
                  onClick={scrollToTop}
                >
                  Terms of Service
                </Link>
              </div>
              <div className="text7">
                <Link
                  href="/privacy-policy"
                  className="links-text"
                  onClick={scrollToTop}
                >
                  Privacy policy
                </Link>
              </div>
              <div className="text8">
                {" "}
                <Link
                  href="/refund-and-return"
                  className="links-text"
                  onClick={scrollToTop}
                >
                  Refund and Returns Policy
                </Link>
              </div>
            </div>
            <div className="footer-inner-text test3 ">
              <div className="text9">Write to us at</div>
              <div className="text10">support@elalearn.com</div>
            </div>
            <div className="rainbow">
              <Lottie animationData={rainbow} style={{ width: "350px" }} />;
            </div>
          </div>
          <div className="Digitide">
            <div className="text11">Digitide Education Pvt. Ltd. Bangalore</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
