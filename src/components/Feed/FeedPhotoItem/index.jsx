import { Eye } from '@phosphor-icons/react';

export function FeedPhotoItem({ srcPhoto, altPhoto, totalAccess }) {
  return (
    <li className="grid rounded overflow-hidden cursor-pointer">
      <img className="place-items-stretch" src={srcPhoto} alt={altPhoto} />
      <span className="flex items-center justify-center gap-1 text-xs text-gray-500 md:justify-end">
        <Eye size={16} /> {totalAccess}
      </span>
    </li>
  );
}
