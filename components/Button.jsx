"use client";

import { changeNumber } from "@/app/lib/actions/changeNumber";
import { useRouter } from "next/navigation";
import React from "react";

const Button = ({ selectedNumber }) => {
  const router = useRouter();

  const handleSubmit = async () => {
    if (selectedNumber !== null) {
      try {
        await changeNumber(selectedNumber);
        router.push("/thankyou");
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <button
      className="text-white bg-orange-1 rounded-3xl p-2 text-[14px] hover:bg-white hover:text-orange-1 font-bold tracking-wider"
      onClick={handleSubmit}
    >
      SUBMIT
    </button>
  );
};

export default Button;
