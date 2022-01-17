import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Banner } from "../components/layout/banner/banner";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const handleOnBannerBtnClick = () => {
    console.log("click");
  };

  console.log("stage");

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner
          buttonText={"View stores nearby"}
          handleOnClick={handleOnBannerBtnClick}
        />
      </main>
    </div>
  );
};

export default Home;
