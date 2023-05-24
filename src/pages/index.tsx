import { About } from "@/containers/about";
import { Banner } from "@/containers/banner";
import { Contact } from "@/containers/contact";
import { Header } from "@/containers/header";
import { Projects } from "@/containers/projects";
import { Skills } from "@/containers/skills";
import Head from "next/head";

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Aylon Carrijo | Portfólio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Banner />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
