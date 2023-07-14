import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const mars = {
  name: "Mars",
  color: "red",
  climate: "dry",
  aliens: "maybe?",
};

export default function Space() {
  const router = useRouter();
  const [peopleInSpace, setPeopleInSpace] = useState(null);

  useEffect(() => {
    console.log("fetch the stuff");
    async function fetchAstronauts() {
      const response = await fetch("http://api.open-notify.org/astros.json");
      const data = await response.json();
      console.log("data: ", data);
      setPeopleInSpace(data.people);
    }
    fetchAstronauts();
  }, []);

  function handleClick() {
    if (confirm("Hello world")) {
      router.push("/users");
    }
  }

  if (!peopleInSpace) {
    return null;
  }
  console.log("peopleInSpace: ", peopleInSpace);

  return (
    <>
      <h1>Number of people in space right now {peopleInSpace.length}!</h1>
      <ul>
        {peopleInSpace.map((person) => (
          <li key={person.name}>
            {person.name}- {person.craft}
          </li>
        ))}
      </ul>
      <div>
        {mars.name} - {mars.aliens}
      </div>
      <button onClick={handleClick}>Click Me</button>
      <Link href="/">Homepage</Link>
    </>
  );
}
