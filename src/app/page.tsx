import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Link href="/colors" className="text-xl text-orange-8 hover:underline">
        Colors
      </Link>
      <Link href="/font-size" className="text-xl text-orange-8 hover:underline">
        Font Size
      </Link>
      <Link
        href="/line-height"
        className="text-xl text-orange-8 hover:underline"
      >
        Line Height
      </Link>
      <Link href="/spacing" className="text-xl text-orange-8 hover:underline">
        Spacing
      </Link>
      <Link href="/z-index" className="text-xl text-orange-8 hover:underline">
        Z-Index
      </Link>
    </main>
  );
}
