import './globals.css'
import "bootstrap/dist/css/bootstrap.min.css";
export const metadata = {
  title: 'Content Management System',
  description: 'The site build for the purpose of classes.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='h-screen p-0 m-0'>
        {children}
      </body>
    </html>
  )
}
