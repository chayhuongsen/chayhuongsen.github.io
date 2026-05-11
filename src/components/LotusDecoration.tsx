export function LotusMark({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 96 96" fill="none" aria-hidden="true">
      <path d="M48 12c10 17 22 27 43 30-18 7-32 4-43-10-11 14-25 17-43 10 21-3 33-13 43-30Z" fill="currentColor" />
      <path d="M48 33c8 14 18 22 35 25-16 7-27 3-35-9-8 12-19 16-35 9 17-3 27-11 35-25Z" fill="currentColor" opacity=".72" />
      <path d="M22 68c16 8 36 10 52 0-6 12-18 18-26 18s-20-6-26-18Z" fill="currentColor" opacity=".5" />
    </svg>
  );
}

export default function LotusDecoration({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute text-lotusGold/20 ${className}`} aria-hidden="true">
      <LotusMark className="h-full w-full" />
    </div>
  );
}
