export function Warning({ errorMessage }) {
  if (!errorMessage) return null;

  return (
    <p className="my-4 mx-0 text-right text-base text-colorError">
      {errorMessage}
    </p>
  );
}
