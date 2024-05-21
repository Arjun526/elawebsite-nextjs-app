import React from "react";
import "./refund.scss";
import Link from "next/link";
import ArrowForwardIosOutlined from "@mui/icons-material/ArrowForwardIosOutlined";
const Refund: React.FC = () => {
  return (
    <div>
      <div id="outer-section-refund">
        <div className="heding-section">
          <span className="home">
            <Link href="/" className="link-home">
              Home
            </Link>
          </span>
          <ArrowForwardIosOutlined fontSize="small" /> Refund and Returns Policy
        </div>
        <div className="heding-text">Refund and Returns Policy</div>
        <div className="outer-section-refund-return">
          <div className="refund-inner-text">
            <div className="refund-text">
              <div className="refund-heading">
                Digitide refund and returns policy
              </div>
              We understand that sometimes circumstances change, and you may
              find yourself needing to reconsider your purchase. However, once
              you have purchased an online course from us, we want to inform you
              that refunds will not be provided. Our courses are carefully
              designed and curated to provide you with the best learning
              experience possible. We believe in the quality of our content and
              are confident that you will find value in the course you have
              chosen. If you have any questions or concerns about your purchase,
              please don&apos;t hesitate to reach out to us. We&apos;re here to
              help and want to ensure that you have a positive experience with
              our courses. Thank you for understanding. Additional
              non-returnable items:
            </div>
            <div className="refund-text">
              <div className="refund-heading">Gifted products</div>
              Downloadable software products There are certain situations where
              only partial refunds are granted. This will be reviewed on a
              case-to-case basis. Once your request is received and inspected,
              we will send you an email to notify you that we have received your
              request. We will also notify you of the next steps. Need help?
              Contact us at admin@digitide.in for questions related to refunds
              and returns.
            </div>

            <div className="refund-text ">
              <div className="refund-heading">Need help?</div>
              Contact us at{" "}
              <Link href="https://mail.google.com" className="refund-anchor">
                support@elalearn.com
              </Link>{" "}
              for questions related to refunds and returns.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Refund;
