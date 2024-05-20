import "./learning.scss";
import Lottie from "lottie-react";
import building from "../../assets/ELA Assets/building.json";
import Courses from "../../assets/ELA Assets/online-class.json";
import Languages from "../../assets/ELA Assets/language.json";
import student from "../../assets/ELA Assets/student.json";
const Learning: React.FC = () => {
  return (
    <>
      <div id="container-main">
        <div className="learning-text">Engaging Learning with</div>
        <div className="learning-text">
          <Lottie
            animationData={student}
            loop={true}
            style={{ width: "80px", height: "80px" }}
          />
          <div className="user-count">70000+</div>
          <div className="user-text">Users</div>
        </div>
        <div className="learning-text">
          <Lottie
            animationData={Courses}
            loop={true}
            style={{ width: "80px", height: "80px" }}
          />
          <div>04+</div>
          <div className="user-text">Courses</div>
        </div>
        <div className="learning-text">
          <Lottie
            animationData={building}
            loop={true}
            style={{ width: "80px", height: "80px" }}
          />
          <div>05+</div>
          <div className="user-text">States</div>
        </div>
        <div className="learning-text">
          <Lottie
            animationData={Languages}
            loop={true}
            style={{ width: "80px", height: "80px" }}
          />
          <div>05+</div>
          <div className="user-text">Languages</div>
        </div>
      </div>
    </>
  );
};
export default Learning;
