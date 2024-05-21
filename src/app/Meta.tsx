import Head from "next/head";

const Meta = ({ title, keywords, descriptions, url, image }: any) => {
  return (
    <Head>
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
    </Head>
  );
};

Meta.defaultProps = {
  title: "Enrich to Evolve with e2eHiring",
  keywords:
    "hiring, e2ehiring, payasyouhire, pay as you hire, jobs, hiring, recruit",
  descriptions:
    "We are on a mission to bring job seekers and employers together to help them find one another seamlessly.",
  url: "https://e2ehiring.com/",
  image:
    "https://e2ehiring-cdn.s3.ap-south-1.amazonaws.com/images/e2eLogo.jpeg",
};

export default Meta;
