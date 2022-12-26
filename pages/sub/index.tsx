import Link from "next/link";
import { useContext } from "react";
import PortfolioContext from "../../context/context";

export default function SubIndex() {
  const { prefix } = useContext(PortfolioContext);
  return (
    <>
      <h1>/pages/sub/index.tsx</h1>
      <Link href={`${prefix}/`}>/pages/index.tsx</Link>
    </>
  );
}
