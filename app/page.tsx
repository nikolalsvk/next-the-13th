// app/page.tsx

import Link from "next/link";

import { Montserrat } from "@next/font/google";

const montserrat = Montserrat();

// This file maps to the index route (/)
export default function Page() {
  return (
    <article>
      <h1>Hello, I am Page!</h1>
      <Link href="/counter">Go to Counter</Link>

      <p className={montserrat.className}>I am using Montserrat font</p>
    </article>
  );
}
