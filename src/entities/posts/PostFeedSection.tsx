import { BASE_URL } from "../../shared/constants";
import { useFetch } from "../../shared/hooks/useFetch";
import { PostCard } from "./PostCard";
import { Post } from "./types";

const POSTS_LIMIT = 10;
const POSTS_URL = `${BASE_URL}/posts?_limit=${POSTS_LIMIT}`;

export default function PostFeedSection() {
  const { data: posts, isLoading, isError } = useFetch<Post>(POSTS_URL);

  return (
    <div>
      <h2>Posts</h2>
      {isLoading && !isError && <div>Loading...</div>}
      {!isLoading && isError && <div>Error, try again</div>}
      {!isLoading && !isError && (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <PostCard post={post} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
