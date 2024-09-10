"use client";

import React, { useState } from "react";
import DropdownButton from "./dropdownbutton";

export default function Home() {
  const [dropdowns, setDropdowns] = useState<number[]>([]);

  const handleAddAccommodationClick = () => {
    setDropdowns([...dropdowns, dropdowns.length]);
  };

  return (
    <div className="px-10 py-10">
      <div className="flex flex-row-reverse pb-4">
        <div className=""></div>
        <div className="text-lg text-right">ยอดรวม: x,xxx บาท</div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="">
          <div className="text-2xl">ที่พัก</div>
          {dropdowns.map((_, index) => (
            <DropdownButton key={index} />
          ))}
          <button
            className="text-lg text-blue-500 w-full text-left hover:bg-blue-100/50 py-2"
            onClick={handleAddAccommodationClick}
          >
            + เพิ่มที่พัก
          </button>
        </div>
      </div>
    </div>
  );
}
