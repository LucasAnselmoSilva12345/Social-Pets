import { Route, Routes } from 'react-router-dom';
import { UserHeader } from '../UserHeader';
import { Feed } from '../../Feed';
import { UserPhotoPost } from '../UserPhotoPost';
import { UserAnalytics } from '../UserAnalytics';

export function UserAccount() {
  return (
    <section className="container my-0 mx-auto py-0 px-4">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/photo-post" element={<UserPhotoPost />} />
        <Route path="/analytics" element={<UserAnalytics />} />
      </Routes>
    </section>
  );
}
