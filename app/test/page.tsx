"use client";

import React, { useRef, useState, ChangeEvent } from "react";
import { toast } from "sonner";

export default function Test() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadQueue, setUploadQueue] = useState<Array<string>>([]);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setUploadQueue(files.map((file) => file.name));

    const uploadPromises = files.map((file) => uploadFile(file));
    Promise.all(uploadPromises)
      .then(() => {
        toast.success("Files uploaded successfully!");
      })
      .catch(() => {
        toast.error("Failed to upload files, please try again!");
      })
      .finally(() => {
        setUploadQueue([]);
      });
  };

  const uploadFile = (file: File) => {
    const formData = new FormData();
    formData.append("file", file);

    return fetch("/api/files/upload", {
      method: "POST",
      body: formData,
    }).then((response) => {
      if (!response.ok) {
        return response.json().then(({ error }) => {
          throw new Error(error);
        });
      }
    });
  };

  return (
    <div>
      <input
        type="file"
        ref={fileInputRef}
        multiple
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
      <button onClick={() => fileInputRef.current?.click()}>
        Upload Files
      </button>
      {uploadQueue.length > 0 && (
        <div>
          <h3>Files to be uploaded:</h3>
          <ul>
            {uploadQueue.map((filename, index) => (
              <li key={index}>{filename}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
