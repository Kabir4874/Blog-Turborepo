import { getSession } from "@/lib/session";
import Link from "next/link";
import SignInPanel from "./signInPanel";
import Profile from "./profile";

const Navbar = async () => {
  const session = await getSession();
  return (
    <>
      <h1 className="text-2xl font-bold mb-4 md:mb-0">My Modern Blog</h1>
      <div className="flex flex-col md:flex-row gap-2 ml-auto [&>a]:py-2 [&>a]:px-4 [&>a]:transition [&>a]:rounded-md [&>a]:hover:text-sky-100 [&>a]:hover:bg-sky-500">
        <Link href="/" className="">
          Blog
        </Link>
        <Link href="#about" className="">
          About
        </Link>
        <Link href="#contact" className="">
          Contact
        </Link>
        {session && session.user ? (
          <Profile user={session.user} />
        ) : (
          <SignInPanel />
        )}
      </div>
    </>
  );
};

export default Navbar;
