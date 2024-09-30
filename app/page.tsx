import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const photoDB = [
    {
      filename: "DSCF5733.JPG",
      width: 3264,
      height: 4896,
      alt: "Wires between buildings",
      location: "Konya, Türkiye",
      date: "2022-08-02 16:49",
    },
    {
      filename: "DSCF5750.JPG",
      width: 3264,
      height: 4896,
      alt: "Religious building",
      date: "2022-08-02 17:08",
    },
    {
      filename: "DSCF5890.JPG",
      width: 3264,
      height: 4896,
      alt: "Columns of a temple",
      date: "2022-08-02 18:43",
    },
    {
      filename: "DSCF9300.JPG",
      width: 3264,
      height: 4896,
      alt: "Close-up of a red flower",
      date: "2022-10-23 16:58",
    },
  ];
  return (
    <>
      <header>
        <h1>
          Photography by <Link href="https://gokay.works">Gökay</Link>
        </h1>
      </header>

      <main>
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-4 gap-4">
            {photoDB.map((x, index) => (
              <div
                key={index}
                className="aspect-square relative overflow-hidden rounded-sm"
              >
                <Image
                  src={"https://cdn.gokay.works/studio/" + x.filename}
                  alt={x.alt}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer>
        <p>Gökay Gültekin &copy; 2024</p>
        <p>All photographs belong to me. All rights reserved.</p>
        <Link href="https://github.com/naphteine/studio">Source code</Link>
      </footer>
    </>
  );
}
