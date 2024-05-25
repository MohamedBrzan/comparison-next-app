import { Card } from "@/components/ui/card";
import Link from "next/link";
import React from "react";

export default function SubscribePage() {
  return (
    <Card className="bg-purple-600 w-full flex-1 flex-col justify-evenly items-center flex text-white">
      Subscribe Page
      <Link href="/dashboard" className="underline hover:text-orange-300">
        Back to Notification Page
      </Link>
    </Card>
  );
}
