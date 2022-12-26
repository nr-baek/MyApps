import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useContext } from "react";
import PortfolioContext from "../context/context";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { prefix } = useContext(PortfolioContext);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>My app</h1>
        <p>click link!</p>
        <ul>
          <li>
            <Link href={`${prefix}/play`}>play link</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
