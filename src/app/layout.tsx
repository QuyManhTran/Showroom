import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Carhub',
  description: 'This is my showroom',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="dark:bg-black">{children}</body>
    </html>
  );
}
