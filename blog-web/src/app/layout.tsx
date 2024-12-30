import './globals.css'

export const metadata = {
  title: 'My Dynamic Blog',
  description: 'A dynamic blog with comments using Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

