export function ErrorMessage({ children }: { children: string }) {
    return (
      <div className="text-green-500 text-sm px-4 py-2 my-3  bg-green-500/10 rounded-lg">
        ✅ {children}
      </div>
    );
  }
  