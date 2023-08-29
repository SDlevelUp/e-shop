import './globals.css'
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar/Navbar';
import GlobalState from '@/context';
import Banner from '@/components/Banner/Banner';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'E-Shop, votre boutique en ligne',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={inter.className}>
        <GlobalState>
          <Banner />
          <Navbar />
          <main>{children}</main>
        </GlobalState>
      </body>
    </html>
  )
}
