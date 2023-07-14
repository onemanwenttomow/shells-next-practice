import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    async function fetchReddit() {
      const response = await fetch("https://www.reddit.com/r/ChatGPT.json");
      const data = await response.json();
      console.log("data: ", data);
    }
    fetchReddit();
  }, []);
  return (
    <>
      <main>Hello World</main>
      <Link href="/space">Go to number of people in space</Link>
    </>
  );
}
