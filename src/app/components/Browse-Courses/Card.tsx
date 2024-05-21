import "./Card.scss";
import Image from "next/image";
interface MyProps {
  learner: string;
  user: string;
  topics: string;
  heading: string;
  icons: any;
  index: number;
  topic: any;
  icons2: any;
  user2: any;
}
const Card: React.FC<MyProps> = ({
  user,
  topics,
  heading,
  icons,
  index,
  topic,
  icons2,
  user2,
}) => {
  return (
    <div>
      <div id="main-card-section">
        <div
          className="card-skills"
          style={{
            backgroundColor:
              index === 0 ? "" : index === 1 ? "#288fc323" : "#d23f504f",
          }}
        >
          <div className="skill-heading">{heading}</div>
          <div className="math-icon-sec">
            <div
              className="icons"
              style={{
                backgroundColor:
                  index === 0 ? "" : index === 1 ? "#288FC3" : "#D23F4F",
              }}
            >
              <Image src={icons} alt="icon" />
            </div>
            <div className="math-text">
              <div className="text-heder">{topics}</div>
              <div className="user-main-sec">
                <div className="count-number">{user}</div>
                <div className="learners-text">learner</div>
              </div>
            </div>
          </div>
          <div className="math-icon-sec">
            <div
              className="icons"
              style={{
                backgroundColor:
                  index === 0 ? "" : index === 1 ? "#288FC3" : "#D23F4F",
              }}
            >
              <Image src={icons2} alt="icon" />
            </div>
            <div className="math-text">
              <div className="text-heder">{topic}</div>
              <div className="user-main-sec">
                <div className="count-number">{user2}</div>
                <div className="learners-text">Learners</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
