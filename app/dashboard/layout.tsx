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
      <div className="p-4 w-[300px] bg-gradient-to-br from-slate-900 to-blue-900">
        <h1 className="text-2xl text-orange-500"><strong>Dashboard Routes</strong></h1>
        {DashboardRoutes.map(({ path, title }, i) => (
          <Link href={path} key={i} className="block text-white">
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
