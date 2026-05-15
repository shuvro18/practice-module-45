import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Link href="/auth/sighup">
        <button className="px-4 py-2 bg-blue-500 text-white rounded">
          Sign Up
        </button>
      </Link>
      <Link href="/auth/signin">
        <button className="px-4 py-2 bg-blue-500 text-white rounded">
          Sign In
        </button>
      </Link>
    </div>
  );
}
