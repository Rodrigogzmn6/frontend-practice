import type { Metadata } from 'next'
import { Header } from './components/Header'
import './globals.css'
import { ptSans } from './ui/fonts'

export const metadata: Metadata = {
  title: 'Learn more about Ableton - maker of Live and Push | Ableton',
  description:
    'Ableton is a Berlin-based company that makes Live and Push - software and hardware for creating, producing and performing music. Learn more about Ableton.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${ptSans.className} antialiased flex flex-col`}>
        <Header />
        {children}
        <footer>This is the footer</footer>
      </body>
    </html>
  )
}
