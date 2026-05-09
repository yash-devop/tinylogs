export const StatusPing = () => {
  return (
    <div className="relative flex items-center justify-center">
      <span className="absolute inline-flex size-2 animate-ping rounded-full bg-emerald-400 opacity-75" />

      <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
    </div>
  );
};
