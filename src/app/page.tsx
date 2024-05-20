import Image from "next/image";
import styles from "./page.module.css";
import PrivacyPolicy from "./privacy-policy/page";
import Navbar from "./components/Navbar/Navbar";
import Swiper from "./Swiper/Swiper";
import Topies from "./Topics/Topies";
import Lern from "./learning/Lern";
import Trendings from "./Trending/Trendings";
import Speaks from "./Speaks/Speaks";
import Join from "./Join/Join";
import Footers from "./footer/Footers";

export default function Home() {
  return (
    <>
      <Navbar />
      <Swiper />
      <Lern />
      <Topies />
      <Trendings />
      <Speaks />
      <Join />
      <Footers />
    </>
  );
}
