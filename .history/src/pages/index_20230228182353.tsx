import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-[#272727] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 ">
      <Head>
        <title>Naren's Portfolio</title>
      </Head>

      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experience */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}
    </div>
  );
}
