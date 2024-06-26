import { Inter } from 'next/font/google'
import NavBar from '@/app/components/navbar/Navbar.jsx';
import './index.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portafolio A.F.',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NavBar />
      {children}
      </body>
    </html>
  )
}
