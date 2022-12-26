import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import PortfolioContext from "../../context/context";

export default function About() {
  const router = useRouter();
  const id = Number(router.query.id);
  const { prefix } = useContext(PortfolioContext);

  return (
    <>
      <h1>/pages/sub/[id].tsx</h1>
      <p>Parameter id: {id}</p>
      <Link href={`${prefix}/`}>/pages/index.tsx</Link>
    </>
  );
}
