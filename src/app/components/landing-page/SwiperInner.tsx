import Boy from "../../assets/swiper-img/Mask Group 21284.png";
import Book from "../../assets/Books/book.svg";
import note from "../../assets/Books/note.svg";
import bookDort from "../../assets/Books/books 2.svg";
import Image from "next/image";
import "./swiperInner.scss";
interface SwipeProps {
  headingText: string;
  subHeadings: string;
  imgsss: any;
}

const SwiperInner: React.FC<SwipeProps> = ({
  headingText,
  imgsss,
  subHeadings,
}) => {
  return (
    <div id="swiper-outer-section">
      {/* <div className="text-section"> */}
      <div className="swiper-text">
        <div className="swiper-learn">{headingText}</div>
        <div className="swiper-text-skill">{subHeadings}</div>
      </div>
      <Image src={imgsss} alt="som" />
      {/* <div className="img-section">
        <div>
          <img src={boy} alt="Boy" />
        </div>
        <div className="card-Book">
          <img src={bookDort} alt="dort" />
          <img src={Book} alt="book" />
          <span className="book-number">1.1.1</span>
          <span className="icon-text">Chalk and Talk</span>
        </div>
        <div className="card-note">
          <img src={note} alt="note" />
          <span className="book-number">1.1.2</span>
          <span className="icon-text">Number Problems</span>
        </div>
        <div className="card-progress">
          <div className="progress-heder">
            <span className="progress-text">Maths • Level 1</span>
            <button className="progress-btn">IN PROGRESS</button>
          </div>
          <div className="card-progress-heading">BAR MODELS</div>
          <div className="progress-content">
            Use geometric figures to think strategically about arithmetic
          </div>
          <div className="progress-bar-section">
            <span className="progress-bar-text">50% Completed</span>
            <div className="bar-progress">
              <div className="bar-inner-sec"></div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};
export default SwiperInner;
