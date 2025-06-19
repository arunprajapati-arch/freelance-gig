"use client";
import React, { useState } from "react";
import { FileUpload } from "@/components/ui/file-upload";
import Image from "next/image";
import { XIcon } from "lucide-react";

export function ImageUpload() {
  const [files, setFiles] = useState<File[]>([]);
  const handleFileUpload = (files: File[]) => {
    setFiles(files);
    console.log(files);
  };

  return (
    <>
    <div className="flex flex-col gap-4 w-full ">
    {files.length === 0 && (
      <div className="w-full max-w-4xl mx-auto min-h-96 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
        <FileUpload onChange={handleFileUpload} />
      </div>
    )}
    {files[0] && (
      <div className="relative  w-full mx-auto min-h-96   bg-white dark:bg-black  rounded-lg overflow-hidden">
        <Image src={URL.createObjectURL(files[0])} alt={files[0].name} fill className="object-cover object-center" />
        <div className="absolute top-0 right-0">
          <button className="bg-gray-100 hover:bg-gray-200 rounded-md p-1 cursor-pointer border" onClick={() => setFiles([])}>
            <XIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
    )}
    </div>
    </>
  );
}
