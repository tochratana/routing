export default function FeedLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div style={{ position: "relative" }}>
      {children}
      {modal}
    </div>
  );
}
