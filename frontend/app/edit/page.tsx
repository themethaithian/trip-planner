"use client";

import React, { useState } from "react";
import AccommodationForm from "../components/accommodationForm";
import RestaurantForm from "../components/restaurantForm";

export default function Edit() {
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const [accommodationForms, setAccomodationForms] = useState<{ id: number }[]>(
    [{ id: 1 }],
  );

  const handleExportAccommodationForms = (price: number) => {
    setTotalPrice((prevTotal) => prevTotal + price);
  };

  const handleAddAccommodationClick = () => {
    setAccomodationForms((prevDropdowns) => [
      ...prevDropdowns,
      { id: prevDropdowns.length + 1 },
    ]);
  };

  const handleDeleteAccommodationForms = (id: number, price: number) => {
    setAccomodationForms((prevButtons) =>
      prevButtons.filter((button) => button.id !== id),
    );

    setTotalPrice(totalPrice - price);
  };

  const [restaurantForms, setRestaurantForms] = useState<{ id: number }[]>([
    { id: 1 },
  ]);

  const handleExportRestaurantForms = (price: number) => {
    setTotalPrice((prevTotal) => prevTotal + price);
  };

  const handleAddRestaurantClick = () => {
    setRestaurantForms((prevDropdowns) => [
      ...prevDropdowns,
      { id: prevDropdowns.length + 1 },
    ]);
  };

  const handleDeleteRestaurantForms = (id: number, price: number) => {
    setRestaurantForms((prevButtons) =>
      prevButtons.filter((button) => button.id !== id),
    );

    setTotalPrice(totalPrice - price);
  };

  return (
    <div className="px-10 py-10">
      <div className="flex flex-row-reverse pb-4">
        <div className=""></div>
        <div className="text-lg text-right">ยอดรวม: {totalPrice} บาท</div>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <div className="text-2xl">ที่พัก</div>
          {accommodationForms.map((button) => (
            <AccommodationForm
              key={button.id}
              id={button.id}
              onDelete={handleDeleteAccommodationForms}
              onExport={handleExportAccommodationForms}
            />
          ))}
          <button
            className="text-lg text-blue-500 w-full text-left hover:bg-blue-100/50 py-2"
            onClick={handleAddAccommodationClick}
          >
            + เพิ่มที่พัก
          </button>
        </div>

        <div>
          <div className="text-2xl">ร้านอาหาร</div>
          {restaurantForms.map((button) => (
            <RestaurantForm
              key={button.id}
              id={button.id}
              onDelete={handleDeleteRestaurantForms}
              onExport={handleExportRestaurantForms}
            />
          ))}
          <button
            className="text-lg text-blue-500 w-full text-left hover:bg-blue-100/50 py-2"
            onClick={handleAddRestaurantClick}
          >
            + เพิ่มร้านอาหาร
          </button>
        </div>
      </div>
    </div>
  );
}
