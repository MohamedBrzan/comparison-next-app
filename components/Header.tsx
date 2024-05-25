import Link from "next/link";

export default function Header() {
  return (
    <header className="flex flex-row justify-around py-2  w-full border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 mb-4">
      <div className="logo">
        <Link href="/">RoboDesk</Link>
      </div>
      <div className="text-sm flex flex-row gap-2">
        <Link href="/">Home</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/fetching">fetching</Link>
        <Link href="/fetching/duplicate">duplicate</Link>
      </div>
    </header>
  );
}
