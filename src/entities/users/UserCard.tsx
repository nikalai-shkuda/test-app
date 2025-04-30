import { UserCartProps } from "./types";

export function UserCard({ user }: UserCartProps) {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.phone}</p>
    </div>
  );
}
