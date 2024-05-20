import Lottie from "lottie-react";
import Image from "next/image";
import "./swipe.scss";
interface SwipeProps {
  headingText: string;
  subHeadings: string;
  imgsss: any;
  id: any;
  isLottie: any;
}
const Swipe: React.FC<SwipeProps> = ({
  imgsss,
  subHeadings,
  headingText,
  id,
  isLottie,
}) => {
  return (
    <>
      <div id="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6 col-xl-6">
            <div className="swiper-text-headings">
              <div className="swiper-learn">{headingText}</div>
              <div className="swiper-text-skill">{subHeadings}</div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6 col-xl-6 d-none d-sm-block">
            <div className="loti-animation">
              {!isLottie ? (
                <Image src={imgsss} alt="boy" className="img-content" />
              ) : (
                <Lottie animationData={imgsss} loop={true} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Swipe;
