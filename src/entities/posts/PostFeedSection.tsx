import { useEffect, useState } from "react";
import { BASE_URL } from "../../shared/constants";
import { Post } from "./types";
import { PostCard } from "./PostCard";

const POSTS_LIMIT = 10;
const POSTS_URL = `${BASE_URL}/posts?_limit=${POSTS_LIMIT}`;

export default function PostFeedSection() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    const fetchUsers = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        // throw new Error("Error");
        await new Promise((resolve) => setTimeout(resolve, 500));
        const response = await fetch(POSTS_URL, {
          signal: abortController.signal,
        });
        const posts = await response.json();
        setPosts(posts);
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
