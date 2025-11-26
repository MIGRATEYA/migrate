'use client'

import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer'
import Link from 'next/link'

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {  

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    })
  }, [])

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      <Header />
      
      <main className="grow">

        {children}

      </main>

      {/* Floating WhatsApp button */}
      <Link
        href="https://wa.me/34605574136"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-50 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-500 text-white shadow-xl hover:bg-blue-600 transition-transform duration-150 hover:scale-105"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="fill-current">
          <path d="M20.52 3.48A11.93 11.93 0 0 0 12.06 0C5.46 0 .07 5.39.07 12c0 2.11.55 4.16 1.6 5.98L0 24l6.2-1.64a12.02 12.02 0 0 0 5.86 1.5h.01c6.6 0 11.99-5.39 11.99-12 0-3.2-1.25-6.22-3.54-8.38ZM12.07 22a10.02 10.02 0 0 1-5.1-1.4l-.37-.22-3.68.98.98-3.58-.24-.37A9.98 9.98 0 1 1 22.06 12c0 5.52-4.48 10-9.99 10Zm5.53-7.58c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.66.15-.19.3-.76.97-.93 1.16-.17.2-.34.22-.64.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.51-1.79-1.69-2.09-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.3.3-.49.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.91-2.2-.24-.57-.48-.5-.66-.5h-.56c-.19 0-.5.07-.76.37-.26.3-1 1-1 2.43 0 1.42 1.03 2.8 1.18 3 .15.2 2.02 3.09 4.9 4.33.69.3 1.22.48 1.63.61.68.22 1.3.19 1.78.12.54-.08 1.77-.72 2.02-1.43.25-.7.25-1.3.18-1.43-.06-.14-.27-.22-.57-.37Z" />
        </svg>
      </Link>

      <Footer />

    </div>
  )
}
