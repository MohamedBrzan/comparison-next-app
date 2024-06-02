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

import { Card } from "@/components/ui/card";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export async function GET() {
  revalidatePath("/products");
  redirect("/products");
}

const getData = async function () {
  const res = await fetch("https://dummyjson.com/products", {
    // next: { revalidate: 3600 },
    cache: "no-store",
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  return res.json();
};

export default async function Page() {
  const { products } = await getData();

  return (
    <section>
      <h1>Data is</h1>
      <div className="flex flex-row flex-wrap">
        <Suspense fallback={<h1>loading...</h1>}>
          {products!.map(
            ({ id, title }: { id: number; title: string }, i: number) => (
              <Card key={i} className="p-4 bg-black text-white">
                {id} - {title}
              </Card>
            )
          )}
        </Suspense>
      </div>
    </section>
  );
}
