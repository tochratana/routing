// File: app/feed/photo/[id]/page.tsx
import Image from "next/image";
import Link from "next/link";

// Mock photo data (same as other files)
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

export default function PhotoPage({ params }: { params: { id: string } }) {
  const photo = photos.find((p) => p.id === params.id);

  if (!photo) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h1>Photo Not Found</h1>
        <Link href="/feed" style={{ color: "#0070f3" }}>
          ← Back to Feed
        </Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <Link
        href="/feed"
        style={{
          color: "#0070f3",
          textDecoration: "none",
          marginBottom: "20px",
          display: "inline-block",
        }}
      >
        ← Back to Feed
      </Link>

      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "8px",
          overflow: "hidden",
          backgroundColor: "white",
        }}
      >
        <Image
          src={photo.url}
          alt={photo.title}
          style={{
            width: "100%",
            height: "400px",
            objectFit: "cover",
          }}
        />
        <div style={{ padding: "24px" }}>
          <h1 style={{ margin: "0 0 12px 0" }}>{photo.title}</h1>
          <p
            style={{
              color: "#666",
              fontSize: "16px",
              lineHeight: "1.6",
              margin: "0 0 20px 0",
            }}
          >
            {photo.description}
          </p>
          <div
            style={{
              fontSize: "14px",
              color: "#888",
              borderTop: "1px solid #eee",
              paddingTop: "16px",
            }}
          >
            <strong>Photo Details:</strong>
            <br />
            ID: {photo.id}
            <br />
            Direct URL: /feed/photo/{photo.id}
          </div>
        </div>
      </div>
    </div>
  );
}
