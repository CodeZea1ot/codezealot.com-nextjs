import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import czSprite from "../public/cz_sprite_128.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>
          codezealot.com | The Full-Stack Developer Portfolio of Tyler W. Phass
        </title>
        <meta
          name="description"
          content="The Full-Stack Developer Portfolio of Tyler W. Phass"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Well, you showed up early...</h1>
        <h2 className={styles.subtitle}>
          This portfolio is currently being built in{" "}
          <a href="https://nextjs.org">Next.js</a>
        </h2>
        <Image src={czSprite} alt="Code_Zealot Pixel Art Sprite" />
      </main>
    </div>
  );
}
