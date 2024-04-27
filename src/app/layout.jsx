
import { Mukta } from 'next/font/google'
import "../styles.css"
const mukta_init = Mukta({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-mukta',
})

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={mukta_init.variable}>{children}</body>
    </html>
  )
}
