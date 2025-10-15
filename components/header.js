import Link from "next/link";

export default function Header(props) {
  return (
    <header className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-center">
        <span className="title-font font-medium text-white text-xl">
          Pushap
        </span>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/" className="mr-5 hover:text-white">Home</Link>
          <Link href="/blogs" className="mr-5 hover:text-white">Blogs</Link>
        </nav>
      </div>
    </header>
  );
}
