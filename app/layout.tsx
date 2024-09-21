import './globals.css';
import Navbar from '@/components/sections/navbar/index';
import Footer from '@/components/sections/footer';
import { siteData } from './lib/site-data';

export const metadata = {
  title: 'DC Cafe',
  description: 'Filipino Cuisine',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer name={siteData.name} />
      </body>
    </html>
  )
}
