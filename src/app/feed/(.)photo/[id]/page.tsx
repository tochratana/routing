"use client";

import Image from "next/image";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useCallback } from "react";

const photos = [
  {
    id: "1",
    title: "Sunset Mountain",
    url: "https://picsum.photos/400/300?random=1",
    description: "A breathtaking sunset over mountain peaks",
  },
  {
    id: "2",
    title: "Ocean Waves",
    url: "https://picsum.photos/400/300?random=2",
    description: "Powerful waves crashing against the shore",
  },
  {
    id: "3",
    title: "Forest Path",
    url: "https://picsum.photos/400/300?random=3",
    description: "A peaceful path winding through the forest",
  },
  {
    id: "4",
    title: "City Lights",
    url: "https://picsum.photos/400/300?random=4",
    description: "Urban skyline illuminated at night",
  },
  {
    id: "5",
    title: "Desert Dunes",
    url: "https://picsum.photos/400/300?random=5",
    description: "Golden sand dunes stretching to horizon",
  },
  {
    id: "6",
    title: "Snowy Peaks",
    url: "https://picsum.photos/400/300?random=6",
    description: "Majestic snow-covered mountain peaks",
  },
];

export default function PhotoModal() {
  const router = useRouter();
  const params = useParams(); // ✅ use hook instead of props
  const photoId = params.id as string;
  const photo = photos.find((p) => p.id === photoId);

  const handleClose = useCallback(() => {
    router.back();
  }, [router]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener("keydown", handleEsc);
    };
  }, [handleClose]);

  if (!photo) return null;

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          className="close-button"
          onClick={handleClose}
          aria-label="Close modal"
        >
          ×
        </button>
        <div style={{ padding: "24px" }}>
          <Image
            src={photo.url}
            alt={photo.title}
            width={800}
            height={400}
            style={{
              width: "100%",
              height: "400px",
              objectFit: "cover",
              borderRadius: "8px",
              marginBottom: "20px",
            }}
          />
          <div>
            <h2 className="text-2xl font-semibold mb-3">{photo.title}</h2>
            <p className="text-gray-600 mb-4">{photo.description}</p>
            <div className="text-sm text-gray-500">Photo ID: {photo.id}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
