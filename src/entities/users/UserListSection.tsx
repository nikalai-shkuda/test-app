import { useState } from "react";
import { BASE_URL } from "../../shared/constants";
import { useFetch } from "../../shared/hooks/useFetch";
import { User } from "./types";
import { UserCard } from "./UserCard";

const POSTS_URL = `${BASE_URL}/users`;

export default function UserListSection() {
  const [search, setSearch] = useState("");
  const { data: users, isLoading, isError } = useFetch<User>(POSTS_URL);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase().trim())
  );

  return (
    <div>
      <h2>Users</h2>
      <input
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {isLoading && !isError && <div>Loading...</div>}
      {!isLoading && isError && <div>Error, try again</div>}
      {!isLoading && !isError && (
        <ul>
          {filteredUsers.map((user) => (
            <li key={user.id}>
              <UserCard user={user} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
