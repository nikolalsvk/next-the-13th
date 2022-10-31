"use client";

import { use } from "react";

async function getData() {
  // You would usually fetch data from an API here.
  // const res = await fetch("https://api.github.com/");

  // But, here we just wait for 3 seconds.
  await new Promise((res) => setTimeout(res, 3000));

  // You would usually return data from an API here.
  // return res.json();
  return "Dashboard data in Client Components";
}

export default function Page() {
  const name = use(getData());

  return <p>🤩 Hello {name}!</p>;
}
