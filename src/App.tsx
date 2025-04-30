import { BrowserRouter, Route, Routes } from "react-router";
import PostFeedSection from "./entities/posts/PostFeedSection";
import { UserListSection } from "./entities/users";
import { Navigation } from "./shared/components";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/users" element={<UserListSection />} />
        <Route path="/posts" element={<PostFeedSection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
