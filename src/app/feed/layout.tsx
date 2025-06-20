// src/app/feed/layout.tsx

import { ReactNode } from "react";

interface FeedLayoutProps {
  children: ReactNode;
  // modal is the slot from the (.)photo parallel route
  modal: ReactNode;
}

export default function FeedLayout({ children, modal }: FeedLayoutProps) {
  return (
    <div style={{ position: "relative" }}>
      {children}
      {modal}
    </div>
  );
}
