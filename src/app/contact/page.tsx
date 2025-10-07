import Link from 'next/link';

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <p>This page is currently under construction.</p>
      <Link href="/" className="text-blue-600 underline">Go to Home</Link>
    </main>
  );
}
