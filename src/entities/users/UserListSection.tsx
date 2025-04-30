import { useEffect, useState } from "react";
import { BASE_URL } from "../../shared/constants";
import { User } from "./types";
import { UserCard } from "./UserCard";

export default function UserListSection() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const abortController = new AbortController();
    const fetchUsers = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        // throw new Error("Error");
        await new Promise((resolve) => setTimeout(resolve, 500));
        const response = await fetch(`${BASE_URL}/users`, {
          signal: abortController.signal,
        });
        const users = await response.json();
        setUsers(users);
      } catch (error) {
        if ((error as any).name !== "AbortError") {
          console.log(error);
          setIsError(true);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();

    return () => {
      abortController.abort();
    };
  }, []);

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
