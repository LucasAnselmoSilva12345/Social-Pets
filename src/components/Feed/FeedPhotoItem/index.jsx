import { Eye } from '@phosphor-icons/react';

export function FeedPhotoItem({
  authorPhoto,
  srcPhoto,
  altPhoto,
  totalAccess,
}) {
  return (
    <li className="grid rounded overflow-hidden cursor-pointer">
      <img className="place-items-stretch" src={srcPhoto} alt={altPhoto} />
      <div className="py-0 px-2 flex items-center justify-between">
        <h4>{authorPhoto}</h4>
        <span className="flex items-center justify-center gap-1 text-xs text-gray-500 md:justify-end">
          <Eye size={16} /> {totalAccess}
        </span>
      </div>
    </li>
  );
}
