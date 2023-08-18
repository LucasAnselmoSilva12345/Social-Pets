import { Feed } from '../../components/Feed';
import { Head } from '../../components/Head';

export function Home() {
  return (
    <section className="container mt-16">
      <Head title="Feed" />
      <h1 className="text-5xl font-inter my-4 mx-0 relative z-1 after:content-[''] after:block after:w-6 after:h-6 after:absolute after:bottom-1 after:-left-4px after:rounded after:bg-colorYellow after:z-sub">
        Feed
      </h1>
      <Feed />
    </section>
  );
}
