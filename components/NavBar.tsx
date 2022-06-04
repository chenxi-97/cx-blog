import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <header className="w-full h-15 sticky top-0 bg-white shadow">
        <div className="flex h-full mx-auto max-w-screen-xl w-full px-5 items-center justify-between md:px-10 xl:px-18">
          <nav>
            <Link href="/">
              <a className="text-gray-900 dark:text-white pr-6 py-4">主页</a>
            </Link>
            <Link href="/about">
              <a className="text-gray-900 dark:text-white px-6 py-4">关于</a>
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Home;
