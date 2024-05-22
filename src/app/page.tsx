import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/Navbar/Navbar";
import Swiper from "./Swiper/Swiper";
import Topies from "./Topics/Topies";
import Lern from "./learning/Lern";
import Trendings from "./Trending/Trendings";
import Speaks from "./Speaks/Speaks";
import Join from "./Join/Join";
import Courses from "./course/Courses";

export default function Home() {
  return (
    <>
      <Swiper />
      <Lern />
      <Topies />
      <Courses />
      <Trendings />
      <Speaks />
      <Join />
    </>
  );
}
