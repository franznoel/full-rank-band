import React, { useEffect, useState } from "react";
import { getImageUrl } from "../services/firebaseStorage";
import Image from "next/image";

const ImageComponent = ({ imageName }: { imageName: string }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const url = await getImageUrl(imageName);
        setImageUrl(url);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };
    fetchImage();
  }, [imageName]);

  return (
    <div>
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt='Full Rank Logo'
          width={200} // Adjust width as needed
          height={200} // Adjust height as needed
          priority // Ensures logo loads quickly
        />
      ) : (
        <p>Loading image...</p>
      )}
    </div>
  );
};

export default ImageComponent;
