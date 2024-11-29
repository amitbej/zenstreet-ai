import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function BookingLayout({ children }) {
  return (
    <div className="min-h-screen bg-white">
      <header className="p-4">
        <Link href="/" className="flex items-center text-gray-600">
          <ArrowLeft className="w-6 h-6 mr-2" />
          <span className="text-lg">Back</span>
        </Link>
      </header>
      <main className="max-w-2xl mx-auto p-4">
        {children}
      </main>
    </div>
  )
}

