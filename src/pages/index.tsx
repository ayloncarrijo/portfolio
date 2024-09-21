import { About } from "@/containers/about";
import { Banner } from "@/containers/banner";
import { Contact } from "@/containers/contact";
import { Header } from "@/containers/header";
import { Projects } from "@/containers/projects";
import { Skills } from "@/containers/skills";
import type { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

export default function Home(): JSX.Element {
  const { t: translate } = useTranslation();

  return (
    <>
      <Head>
        <title>Aylon Carrijo | {translate("portfolio")}</title>
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

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["common", "home"])),
    },
  };
};
