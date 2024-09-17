import React, { useState, useRef } from "react";
import Image from "next/image";
import { PhotoIcon } from "@heroicons/react/24/outline";

const ImageUpload: React.FC = () => {
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
    }
  };

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="mt-1 flex items-center space-x-4">
      {preview ? (
        <button
          className="border border-1 rounded-full overflow-hidden flex items-center justify-center"
          onClick={handleClick}
          style={{ width: "150px", height: "150px" }}
        >
          <Image
            src={preview}
            alt="Preview"
            className="object-cover"
            width={100}
            height={100}
          />
        </button>
      ) : (
        <button
          className="rounded-full bg-gray-200 flex items-center justify-center"
          onClick={handleClick}
          style={{ width: "150px", height: "150px" }}
        >
          <PhotoIcon className="w-10 h-10 text-gray-400" />
        </button>
      )}
      <div>
        <input
          ref={fileInputRef}
          className="hidden"
          id="file_input"
          accept="image/*"
          type="file"
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
};

export default ImageUpload;
