import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Naren's Portfolio</title>
      </Head>

      <h1>Let's build an Awesome Portfolio</h1>
    </div>
  );
}
