// import { cache } from "react";

// const getData = cache(async function () {
//   const res = await fetch(`http://localhost:4000/users/all`, {
//     next: { revalidate: 3 },
//   });
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.

//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// })

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

interface User {
  name: string;
  email: string;
}

export async function GET() {
  revalidatePath("/all");
  redirect("/all");
}

const getData = async function (): Promise<User[]> {
  const res = await fetch(`http://localhost:4000/users/all`, {
    // next: { revalidate: 3600 },
    cache: "no-store",
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  return res.json();
};

export default async function Page() {
  const data = await getData();

  return (
    <section>
      <h1>Data is</h1>
      <div>
        {data?.map(
          ({ name, email }: { name: string; email: string }, i: number) => (
            <div key={i}>
              {name} - {email}
            </div>
          )
        )}
      </div>
    </section>
  );
}
