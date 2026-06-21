export default function Loading() {
  return (
    <div className="loading-screen">
      <div className="flex flex-col items-center gap-4">
        <div className="loading-spinner" />
        <p className="text-muted text-sm tracking-widest uppercase">
          Loading...
        </p>
      </div>
    </div>
  );
}
