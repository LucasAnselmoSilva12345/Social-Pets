import { Route, Routes } from 'react-router-dom';
import { UserHeader } from '../UserHeader';
import { Feed } from '../../Feed';
import { UserPhotoPost } from '../UserPhotoPost';
import { UserAnalytics } from '../UserAnalytics';
import { NotFound } from '../../NotFound';
import { useContext } from 'react';
import { UserContext } from '../../../contexts/UserContext';
import { Head } from '../../Head';

export function UserAccount() {
  const { dataUser } = useContext(UserContext);

  return (
    <section className="container my-0 mx-auto py-0 px-4">
      <Head title="My Account" />
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={dataUser.id} />} />
        <Route path="/photo-post" element={<UserPhotoPost />} />
        <Route path="/analytics" element={<UserAnalytics />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
}
