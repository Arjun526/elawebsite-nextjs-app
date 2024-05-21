import "./hot.scss";
import Lottie from "lottie-react";
import redbg from "../../assets/ELA Assets/Red marker.json";
import maths from "../../assets/icons-sec/math-flip.svg";
import works from "../../assets/icons-sec/work-flip.svg";
import Image from "next/image";

const HotLearningTopics: React.FC = () => {
  return (
    <>
      <div id="Hot-Learning-Topics" className=" container">
        <div className="heading-text">
          <div className="background-red-anim">
            <Lottie animationData={redbg} loop={true} className="red-bg" />
            <div className="red-text-heading">Hot Learning Topics</div>
          </div>
        </div>
        <div className="card-section">
          <div className="card-flip-main">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="card-math-inner">
                    <div className="card-math-bg">
                      <Image src={maths} alt="math" />
                    </div>
                    <div className="math-text">
                      Foundational science & visualization masterclass
                    </div>
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="flip-card-back-main">
                    <div className="back-heading">About the course</div>
                    <div className="basic-text">
                      The basis for education in the last millennium was
                      reading, writing, and arithmetic now it is reading,
                      writing, and computing. Learning to program is an
                      essential part of the education of every student, not just
                      in the sciences
                    </div>
                    <div className="show-all">show all</div>
                    <div className="course-outcome">Course Outcome</div>
                    <div className="liest-section">
                      <div>• Int roduction to expressions and polynomials</div>
                      <div>• Fluency withrational numbers</div>
                      <div>• Understanding exponents and powers</div>
                      <div>• Solving linear equations and inequalities</div>
                    </div>
                    <div className="price-main">
                      <div>
                        <div className="price-inner-sec">₹ 200/-</div>
                        <div className="include-gst">(include GSt)</div>
                      </div>
                      <button className="btn-footer">BUY NOW</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="card-math-inner">
                  <div className="card-math-bg">
                    <Image src={works} alt="work" />
                  </div>
                  <div className="math-text">
                    Foundational science & visualization masterclass
                  </div>
                </div>
              </div>
              <div className="flip-card-back">
                <div className="flip-card-back-main">
                  <div className="back-heading">About the course</div>
                  <div className="basic-text">
                    The basis for education in the last millennium was reading,
                    writing, and arithmetic now it is reading, writing, and
                    computing. Learning to program is an essential part of the
                    education of every student, not just in the sciences
                  </div>
                  <div className="show-all">show all</div>
                  <div className="course-outcome">Course Outcome</div>
                  <div className="liest-section">
                    <div>• Int roduction to expressions and polynomials</div>
                    <div>• Fluency withrational numbers</div>
                    <div>• Understanding exponents and powers</div>
                    <div>• Solving linear equations and inequalities</div>
                  </div>
                  <div className="price-main">
                    <div>
                      <div className="price-inner-sec">₹ 200/-</div>
                      <div className="include-gst">(include GSt)</div>
                    </div>
                    <button className="btn-footer">BUY NOW</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotLearningTopics;
