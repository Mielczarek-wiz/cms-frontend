import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import AllAppProviders from '@/providers/AllAppProviders'
import Sidebar from '@/components/sidebar/Sidebar'
import Menu from '@/components/menu/Menu'

export const metadata = {
  title: 'Content Management System',
  description: 'The site build for the purpose of classes.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='h-screen p-0 m-0'>
        <AllAppProviders>
          <Header />
          <Sidebar >
            <Menu />
          </Sidebar>
          <div className='flex flex-col items-center justify-start h-screen'>
              <main className='w-full h-fit'>
                {children}
              </main>
              <Footer />
          </div>
        </AllAppProviders>
      </body>
    </html>
  )
}
