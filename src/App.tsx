import { BrowserRouter, Route, Routes } from "react-router";
import { AlbumGallerySection } from "./entities/albums";
import PostFeedSection from "./entities/posts/PostFeedSection";
import { UserListSection } from "./entities/users";
import { Navigation } from "./shared/components";
import { ROUTES } from "./shared/constants";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path={ROUTES.USERS} element={<UserListSection />} />
        <Route path={ROUTES.POSTS} element={<PostFeedSection />} />
        <Route path={ROUTES.ALBUMS} element={<AlbumGallerySection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
