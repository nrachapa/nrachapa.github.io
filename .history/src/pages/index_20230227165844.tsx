import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Naren's Portfolio</title>
      </Head>

      <h1 className="p-10 text-red-500">Let's build an Awesome Portfolio</h1>
    </div>
  );
}
