'use client';
import React, { useState, createContext, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
export const metadata: Metadata = {
  title: 'Car hub',
  description: 'This is my showroom',
  icons: {
    icon: ['/favicon.ico?v=4'],
  },
};

export const ThemeConText = createContext<any | null>(null);
const queryClient = new QueryClient();

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  useEffect(() => {
    document.title = 'Car hub';
  }, []);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const onChangeTheme = (e: React.MouseEvent) => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <html lang="en" className={isDarkMode ? 'dark' : undefined}>
      <ThemeConText.Provider value={{ onChangeTheme, isDarkMode }}>
        <QueryClientProvider client={queryClient}>
          <body className="dark:bg-black">
            {modal}
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
          </body>
        </QueryClientProvider>
      </ThemeConText.Provider>
    </html>
  );
}
