import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import czSprite from "../public/cz_sprite_128.png";
import Button from "../components/UI/Button";
import DarkModeToggle from "../components/UI/DarkModeToggle";

export default function Home(props) {
  return (
    <div className={props.classes}>
      <Head>
        <title>
          CodeZealot.com | The Full-Stack Developer Portfolio of Tyler W. Phass
        </title>
        <meta
          name="description"
          content="The Full-Stack Developer Portfolio of Tyler W. Phass"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex h-screen">
        <div className="m-auto text-center">
          <h1 className="text-6xl	font-bold mb-5">
            Well, you are here early...
          </h1>
          <h2 className="text-4xl	mb-5">
            This portfolio is currently being built using{" "}
            <a
              className="font-bold text-blue-700 dark:text-red-400 hover:underline"
              href="https://nextjs.org"
            >
              Next.js
            </a>
          </h2>
          <Image src={czSprite} alt="Code_Zealot Pixel Art Sprite" />
          <DarkModeToggle
            isDarkMode={props.isDarkMode}
            onClickHandler={props.onToggleDarkMode}
          />
        </div>
      </div>
    </div>
  );
}
