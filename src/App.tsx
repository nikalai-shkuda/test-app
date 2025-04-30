import { BrowserRouter, Route, Routes } from "react-router";
import { AlbumGallerySection } from "./entities/albums";
import PostFeedSection from "./entities/posts/PostFeedSection";
import { UserListSection } from "./entities/users";
import { BaseLayout } from "./shared/components";
import { ROUTES } from "./shared/constants";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route path={ROUTES.USERS} element={<UserListSection />} />
          <Route path={ROUTES.POSTS} element={<PostFeedSection />} />
          <Route path={ROUTES.ALBUMS} element={<AlbumGallerySection />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
