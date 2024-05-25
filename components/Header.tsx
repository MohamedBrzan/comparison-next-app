import Link from "next/link";

const routesLinks = [
  { id: 1, route: "/", title: "Home" },
  { id: 2, route: "/dashboard", title: "Dashboard" },
  { id: 3, route: "/fetching", title: "Fetching" },
  { id: 4, route: "/fetching/duplicate", title: "Duplicate" },
  { id: 5, route: "/feed", title: "Feed" },
  { id: 6, route: "/photo/1", title: "Photo" },
];

export default function Header() {
  return (
    <header className="flex flex-row justify-around py-2  w-full border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 mb-4">
      <div className="logo">
        <Link href="/">
          RoboDesk <small className="text-blue-600">v3</small>{" "}
        </Link>
      </div>
      <div className="text-sm flex flex-row gap-2">
        {routesLinks.map(
          (
            { route, title }: { id: number; route: string; title: string },
            i
          ) => (
            <Link href={route} key={i} className="hover:text-blue-400">
              {title}
            </Link>
          )
        )}
      </div>
    </header>
  );
}
