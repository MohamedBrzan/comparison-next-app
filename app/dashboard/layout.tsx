import Link from "next/link";
import React, { ReactNode } from "react";
import DashboardRoutes from "./DashboardRoutes";

export default function DashboardLayout({
  children,
  menu,
  notification,
}: {
  children: ReactNode;
  menu: ReactNode;
  notification: ReactNode;
}) {
  return (
    <div className="flex flex-row gap-4">
      <div className="p-4 w-[300px] bg-gradient-to-bl  from-indigo-900 h-[80vh] rounded-r-md">
        <h1 className="text-3xl">Dashboard Routes</h1>
        {DashboardRoutes.map(({ path, title }, i) => (
          <Link href={path} key={i} className="block">
            {title}
          </Link>
        ))}
      </div>
      <div className="content w-full">
        <div className="h-[40vh]">{children}</div>

        <div className="flex flex-row gap-4 h-60">
          {menu}
          {notification}
        </div>
      </div>
    </div>
  );
}
