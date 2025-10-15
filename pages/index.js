import Layout from "../components/layout";

export async function getStaticProps() {
  // You can keep your existing data fetching here or remove if unused
  return {
    props: {}, // no special homepage data needed for simple hero example
  };
}

export default function Home() {
  return (
    <Layout>
      <section className="relative w-full h-96">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80"
          alt="Hero Image"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">
            Welcome to My Website
          </h1>
        </div>
      </section>
      {/* Add more homepage content below as needed */}
    </Layout>
  );
}
