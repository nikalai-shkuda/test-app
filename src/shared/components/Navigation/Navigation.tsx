import { Link } from "react-router";
import { ROUTES } from "../../constants";

export function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to={ROUTES.USERS}>Users</Link>
        </li>
        <li>
          <Link to={ROUTES.POSTS}>Posts</Link>
        </li>
        <li>
          <Link to={ROUTES.ALBUMS}>Albums</Link>
        </li>
      </ul>
    </nav>
  );
}
