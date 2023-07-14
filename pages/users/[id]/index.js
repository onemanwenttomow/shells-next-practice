import { useRouter } from "next/router";

const users = [
  { id: "1", name: "pete" },
  { id: "2", name: "diego" },
  { id: "3", name: "cj" },
  { id: "4", name: "felix" },
];

export default function User() {
  const router = useRouter();
  console.log("router: ", router);
  const userId = router.query.id;
  const user = users.find((user) => user.id === userId);
  if (!user) {
    return null;
  }
  return (
    <>
      <h1>About a specific user {router.query.id}</h1>
      <h2>{user.name}</h2>
    </>
  );
}
