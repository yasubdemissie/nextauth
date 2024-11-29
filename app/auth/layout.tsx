export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-white h-dvh flex justify-center items-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-sky-800">
      {children}
    </div>
  );
}
