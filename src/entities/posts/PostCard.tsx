import { PostCartProps } from "./types";

export function PostCard({ post }: PostCartProps) {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}
