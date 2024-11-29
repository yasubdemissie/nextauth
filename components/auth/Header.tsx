interface headerProps {
  label: string;
}

export function Header({ label }: headerProps) {
  return (
    <div className=" w- full flex flex-col items-center justify-between gap-y-4">
      <h2 className="text-3xl font-semibold">🔐 Auth</h2>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
}
