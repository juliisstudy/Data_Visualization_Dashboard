import Link from "next/link";
export default function NotFound() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-2">
      <h2>404 Not Found</h2>

      <Link href="/dashboard/subscribers"> Go back</Link>
    </main>
  );
}
