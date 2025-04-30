import { Link } from "react-router";

export function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
      </ul>
    </nav>
  );
}
