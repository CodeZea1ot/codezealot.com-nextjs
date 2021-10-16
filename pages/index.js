import Head from "next/head";
import styles from "../styles/Home.module.css";

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
        <h1 className={styles.title}>Coming Soon</h1>
      </main>
    </div>
  );
}
