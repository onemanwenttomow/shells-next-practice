import Link from "next/link";
import { useState } from "react";
import { uid } from "uid";

const initialCoaches = [
  { id: "1", name: "pete" },
  { id: "2", name: "diego" },
  { id: "3", name: "cj" },
  { id: "4", name: "felix" },
];

export default function Users() {
  const [coaches, setCoaches] = useState(initialCoaches);

  function handleSubmit(event) {
    event.preventDefault();

    // grab name from form
    const newCoachName = event.target.elements["coach-name"].value;
    // create a new user object
    const newCoachObject = { name: newCoachName, id: uid() };

    console.log("newCoachObject: ", newCoachObject);
    // add new user to state
    setCoaches([...coaches, newCoachObject]);
    event.target.reset();
    event.target.elements["coach-name"].focus();
  }

  function handleRemoveCoach(coachId) {
    console.log("please remove the coach", coachId);
    setCoaches(coaches.filter((coach) => coach.id !== coachId));
  }
  return (
    <>
      <h1>All the users</h1>
      <ul>
        {coaches.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
            <button onClick={() => handleRemoveCoach(user.id)}>X</button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <label htmlFor="coach-name">Name</label>
        <input type="text" id="coach-name" name="coach-name" required />
        <button type="submit">Add Coach</button>
      </form>
    </>
  );
}
