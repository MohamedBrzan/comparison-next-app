import imagesCollection from "@/data/imagesCollection";
import Image, { StaticImageData } from "next/image";

export default function PhotosFeed() {
  return (
    <div className="container flex flex-row flex-wrap gap-4 cursor-pointer">
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
            <Image src={src} alt={title} width={400} height={400} />
            <h3 className="text-2xl">
              <strong>{title}</strong>
            </h3>
          </div>
        )
      )}
    </div>
  );
}
