import { Card } from "@/components/ui/card";
import Link from "next/link";
import React from "react";

export default async function SubscribePage() {
  const random = Math.random() * 0.5;

  if (random != 0.5) {
    console.log(random);
    throw new Error("Something went wrong");
  }

  return (
    <Card className="bg-purple-600 w-full flex-1 flex-col justify-evenly items-center flex text-white">
      Subscribe Page
      <Link href="/dashboard" className="underline hover:text-orange-300">
        Back to Notification Page
      </Link>
    </Card>
  );
}
