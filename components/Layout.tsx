import Head from "next/head";
import { ReactNode } from "react";
import NavBar from "./NavBar";

type LayoutProps = {
  children: ReactNode;
};

const Home = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>cx-blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavBar />
      <main className="w-full h-full p-10">{children}</main>
    </>
  );
};

export default Home;
