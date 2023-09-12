import Link from "next/link";
import AuthButton from "./auth-button-client";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="flex flex-row justify-between items-center py-4 mx-auto max-w-screen-xl">
      <Link href="/">NextAuth</Link>

      <AuthButton />
    </nav>
  );
};

export default Navbar;
