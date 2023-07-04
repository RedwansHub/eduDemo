
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Appbar from './components/Appbar'
import ClientOnly from './components/utils/ClientOnly'
import ToasterProvider from './providers/ToasterProvider'
import ModalsProvider from './providers/ModalProvider'
import getCurrentUser from './lib/Action/getCurrentUser'
import SesProvider from './providers/SesProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const User = await getCurrentUser()

  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientOnly>
          <ToasterProvider />
          <ModalsProvider/>
            {!User 
              ? <Navbar /> 
              : <Appbar CurrentUser={User}/>
            }
        </ClientOnly>

        <SesProvider>
          {children}
        </SesProvider>
        
      </body>
    </html>
  )
}
