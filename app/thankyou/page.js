import React from "react";
import { getNumber } from "@/app/lib/getNumber";

const page = async () => {
  const number = await getNumber();

  return <div>rating: {number}</div>;
};

// server
//
// static-rendering
//
// build-time -> make -> re-use
//
//
// dynamic-rendering
// /thankyou -> request -> make -> return

export default page;
