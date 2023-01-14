import Head from "next/head";
import { Inter } from "@next/font/google";
import Link from "next/link";
import { useContext } from "react";
import PortfolioContext from "../context/context";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { prefix } = useContext(PortfolioContext);
  return (
    <>
      <Head>
        <title>My Apps | 내가만든 앱들</title>
        <meta name="description" content="The apps that I developed." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ padding: "30px 50px" }}>
        <h1 style={{ color: "#7c17e1" }}>My apps</h1>
        <ul>
          <li>
            <Link href={`${prefix}/calculator`}> Calculator</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
