import Layout from "../components/layout";

export default function UserProfile() {
  const currentUser = { name: "Guest User" };

  return (
    <Layout>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="lg:w-48 md:w-36 w-32 mb-10 object-cover object-center rounded"
            alt="profile"
            src="/default-avatar.png"
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              {currentUser.name}
            </h1>
            <p className="leading-relaxed mb-8">
              This is a static user profile page. Login functionality has been disabled.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
