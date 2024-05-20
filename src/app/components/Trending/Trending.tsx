import "./Trending.scss";
import arrowup from "../../assets/Arrow/arrow-up.svg";
import student from "../../assets/Arrow/students.svg";
import arrow from "../../assets/Arrow/arrow.svg";
import Image from "next/image";
interface props {
  studentNum: number;
  heading: string;
  price: number;
  levels: number;
  img: any;
}
const Trending: React.FC<props> = ({
  studentNum,
  heading,
  price,
  levels,
  img,
}) => {
  return (
    <div id="explore-Trending">
      <div className="explore-main">
        <div className="explore-cards">
          <div className="sticker-img">
            <Image src={img} alt="bg" />
          </div>
          <div className="explore-card-inner">
            <div className="label-section">
              <div className="labels-text-outer">
                <Image src={arrowup} alt="arrow" />
                <div className="text-label">{levels} labels</div>
              </div>
              <div className="rupee-sec">₹ {price}</div>
            </div>
            <div className="foundation-text">{heading}</div>
            <div className="footer-sec">
              <div className="footer-left">
                <div className="img-bg">
                  <Image src={student} alt="student" />
                </div>
                <div className="student-text">
                  {studentNum} Students Registered
                </div>
              </div>
              <div className="icons-arrow">
                <Image src={arrow} alt="arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
