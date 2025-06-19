"use client";
import Link from "next/link";

const photos = [
  {
    id: "1",
    title: "Sunset Mountain",
    url: "https://picsum.photos/400/300?random=1",
  },
  {
    id: "2",
    title: "Ocean Waves",
    url: "https://picsum.photos/400/300?random=2",
  },
  {
    id: "3",
    title: "Forest Path",
    url: "https://picsum.photos/400/300?random=3",
  },
  {
    id: "4",
    title: "City Lights",
    url: "https://picsum.photos/400/300?random=4",
  },
  {
    id: "5",
    title: "Desert Dunes",
    url: "https://picsum.photos/400/300?random=5",
  },
  {
    id: "6",
    title: "Snowy Peaks",
    url: "https://picsum.photos/400/300?random=6",
  },
];

export default function FeedPage() {
  return (
    <div>
      <div style={{ padding: "20px" }}>
        <h1>Photo Feed</h1>
        <p>Click on any photo to view it in detail</p>
      </div>

      <div className="feed-grid">
        {photos.map((photo) => (
          <Link key={photo.id} href={`/feed/photo/${photo.id}`}>
            <div className="photo-card">
              <img src={photo.url} alt={photo.title} className="photo-image" />
              <div className="photo-info">
                <h3 style={{ margin: "0 0 8px 0", fontSize: "16px" }}>
                  {photo.title}
                </h3>
                <p style={{ margin: 0, color: "#666", fontSize: "14px" }}>
                  Photo #{photo.id}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

