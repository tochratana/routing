// import Image from "next/image";

import Link from "next/link";
import FeedPage from "./feed/page";

export default function Home() {
  return (
    <div className="text-center mt-5">
      <Link key={1} href={"feed"}>
        click here to see feed
      </Link>
    </div>
  );
}
