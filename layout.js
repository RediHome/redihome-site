import './globals.css'

export const metadata = {
  title: 'RediHome | Built Better. Built Faster. Built for You.',
  description: 'Quality homes for Birmingham\'s working families. 0% down, no PMI, and keys in 8 weeks. Affordable homeownership made simple.',
  keywords: 'affordable housing, Birmingham homes, first time home buyer, 0 down payment, RediHome, Alabama homes, Birmingham real estate',
  openGraph: {
    title: 'RediHome | Affordable Homeownership in Birmingham',
    description: 'Quality homes for working families. 0% down, no PMI, keys in 8 weeks.',
    url: 'https://redihome.io',
    siteName: 'RediHome',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,400&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  )
}
