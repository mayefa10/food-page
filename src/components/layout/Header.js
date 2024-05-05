'use client';
import { useSession } from "next-auth/react"
import Link from 'next/link';

export default function Header() {
  const session = useSession();
  console.log(session);
  const status = session.status;
  return (
    <div>
      <header className="flex items-center justify-between">
        <nav className="flex text-gray-500 font-semibold items-center gap-8">
          <Link href={'/'} className="text-primary font-semibold text-4xl">
            Jq pizza
          </Link>
          <Link href={'/'}>Home</Link>
          <Link href={''}>Menu</Link>
          <Link href={''}>About</Link>
          <Link href={''}>Contact</Link>
        </nav>
        <nav className="flex items-center gap-4 text-gray-500 font-semibold">
          {status === "authenticated" && (
            <button
              onClick={()=> signOut()}
              className="bg-primary text-white px-8 py-2 rounded-full"
            >
              Logout
            </button>
          )}
          {status !==
           "authenticated" &&(
              <>
                <Link href={'/login'}>Login</Link>
                <Link
                  href={'/register'}
                  className="bg-primary text-white px-8 py-2 rounded-full"
                >
                  Register
                </Link>
              </>
            )}
        </nav>
      </header>
    </div>
  );
}
