import Navigation from './components/Navigation'
import './globals.css'

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <head>
        <title>My first app with next 13</title>
      </head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
