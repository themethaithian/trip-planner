import { useState, useEffect, useRef } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { TrashIcon } from "@heroicons/react/24/outline";
import ImageUpload from "./imageUpload";
import { DateRangePicker } from "@nextui-org/date-picker";

interface AccomodationProps {
  id: number;
  onDelete?: (id: number, price: number) => void;
  onExport?: (price: number) => void;
}

const AccommodationForm: React.FC<AccomodationProps> = ({
  id,
  onDelete,
  onExport,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState<number>(0);

  const prevPriceRef = useRef<number>(0);

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setPrice(isNaN(value) ? 0 : value);
  };

  const handleDelete = () => {
    if (onDelete) {
      onDelete(id, price);
    }
  };

  useEffect(() => {
    if (onExport) {
      onExport(price - prevPriceRef.current);
    }

    prevPriceRef.current = price;
  }, [price, onExport]);

  return (
    <div className="flex justify-between items-center my-3 group/main">
      <div className="w-full rounded border border-gray-200 shadow-md overflow-hidden">
        <div className="flex items-center p-2">
          <button
            className="flex items-center justify-between rounded text-lg w-full py-2 px-2 hover:text-blue-500 group/button"
            onClick={handleToggle}
          >
            <div className="text-left w-full">
              <div className="text-base">{name || "(ยังไม่กรอกข้อมูล)"}</div>
              <div className="text-sm text-gray-400">ราคา {price || 0} บาท</div>
            </div>
            <ChevronDownIcon
              className={`h-5 w-5 text-gray-400 transition-transform duration-300 group-hover/button:text-blue-500 ${isExpanded ? "rotate-180" : ""
                }`}
            />
          </button>
        </div>

        <div
          className={`transition-[max-height] duration-300 ease-in-out overflow-hidden ${isExpanded ? "max-h-200" : "max-h-0"}`}
        >
          <div className="px-4 pb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                ชื่อที่พัก
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full border-gray-300 bg-gray-100 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
                placeholder="กรอกชื่อที่พัก"
              />
              <div>
                <label className="mt-2 block text-sm font-medium text-gray-700">
                  วันที่เข้าพัก
                </label>
                <DateRangePicker className="max-w-xs" />
                <div className="flex items-center space-x-4"></div>
              </div>
              <div>
                <label className="mt-2 block text-sm font-medium text-gray-700">
                  ยอดรวม
                </label>
                <input
                  type="number"
                  value={price}
                  onChange={handlePriceChange}
                  className="mt-1 block w-full border-gray-300 bg-gray-100 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
                  placeholder="กรอกราคา"
                />
              </div>
              <div>
                <label className="mt-2 block text-sm font-medium text-gray-700">
                  เลือกรูปภาพ
                </label>
                <ImageUpload />
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="ml-4 h-5 w-5 opacity-0 group-hover/main:opacity-100 transition-opacity duration-200"
        onClick={handleDelete}
      >
        <TrashIcon className="text-gray-400 hover:text-blue-500" />
      </button>
    </div>
  );
};

export default AccommodationForm;
