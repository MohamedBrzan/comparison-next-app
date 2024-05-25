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
      <div>
        {products!.map(
          ({ id, title }: { id: number; title: string }, i: number) => (
            <div key={i}>
              {id} - {title}
            </div>
          )
        )}
      </div>
    </section>
  );
}
