"use client"; // Error components must be Client Components

import { useRouter } from "next/router";
import { startTransition, useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  // const router = useRouter();

  // function RefreshAndReset() {
  //   router.reload();
  //   reset();
  // }

  return (
    <div className="bg-red-700 w-full flex-1 flex-col justify-evenly items-center flex text-white">
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
