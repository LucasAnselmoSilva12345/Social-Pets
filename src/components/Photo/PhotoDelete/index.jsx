import { PHOTO_DELETE } from '../../../api/api';
import { useAPIFetch } from '../../../hooks/useAPIFetch';

export function PhotoDelete({ id }) {
  const { loading, fetchAPIData } = useAPIFetch();

  async function handleClick() {
    const confirm = window.confirm(
      'Did you have certainty about the delete this photo?'
    );

    if (confirm) {
      const { url, options } = PHOTO_DELETE(id);
      const { response } = await fetchAPIData(url, options);
      if (response.ok) window.location.reload();
    }
  }

  return (
    <div>
      {loading ? (
        <button disabled>Delete</button>
      ) : (
        <button onClick={handleClick}>Delete</button>
      )}
    </div>
  );
}
