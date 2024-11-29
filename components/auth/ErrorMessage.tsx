export function ErrorMessage({ children }: { children: string }) {
  return (
    <div className="text-red-500 text-sm px-4 py-2 my-3  bg-red-500/10 rounded-lg">
      ⛔ {children}
    </div>
  );
}
