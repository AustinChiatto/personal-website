import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import './reset.min.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Portfolio',
    description: 'Todo: meta tags'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
