import { Eye } from '@phosphor-icons/react';

export function FeedPhotoItem({
  photo,
  srcPhoto,
  altPhoto,
  totalAccess,
  setModalPhoto,
}) {
  function changeDisplayPhoto() {
    setModalPhoto(photo);
  }

  return (
    <li
      onClick={changeDisplayPhoto}
      className="grid rounded overflow-hidden cursor-pointer"
    >
      <img className="place-items-stretch" src={srcPhoto} alt={altPhoto} />
      <span className="flex items-center justify-center gap-1 text-xs text-gray-500 md:justify-end">
        <Eye size={16} /> {totalAccess}
      </span>
    </li>
  );
}
