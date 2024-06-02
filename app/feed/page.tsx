import imagesCollection from "@/data/imagesCollection";
import Image, { StaticImageData } from "next/image";

export default async function PhotosFeed() {
  return (
    <div className="container flex flex-row flex-wrap justify-center items-center text-center gap-4 cursor-pointer">
      {imagesCollection.map(
        (
          {
            id,
            title,
            src,
          }: { id: number; title: string; src: StaticImageData },
          i: number
        ) => (
          <div key={id + i}>
            <Image src={src} alt={title} width={350} height={350} />
            <h3 className="text-2xl">
              <strong>{title}</strong>
            </h3>
          </div>
        )
      )}
    </div>
  );
}
