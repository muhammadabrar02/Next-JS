import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dynamic Blog with Next.js 13',
  description: 'A dynamic blog built with the latest Next.js features',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100`}>
        <nav className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-3">
            <a href="/" className="text-xl font-bold text-blue-600">My Blog</a>
          </div>
        </nav>
        <main className="container mx-auto mt-8">
          {children}
        </main>
      </body>
    </html>
  )
}

